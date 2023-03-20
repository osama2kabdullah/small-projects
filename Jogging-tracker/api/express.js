import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const dataFilePath = (year, month) => path.join(process.cwd(), "api/.data", `${month}-${year}.json`);

// get all data
app.get("/data/:year/:month", (req, res) => {
  const { year, month } = req.params;
  const filePath = dataFilePath(year, month);

  // check if file exists
  if (fs.existsSync(filePath)) {
    // read the data from file
    const data = fs.readFileSync(filePath, "utf-8");
    try {
      const parsedData = JSON.parse(data);      
      res.send(parsedData);
    } catch (err) {
      return res.status(500).send({ error: "Could not parse data file." });
    }
  } else {
    // send empty array if file does not exist
    res.send([]);
  }
});

// delete data for a given year and month
app.delete("/data/:year/:month/:date", (req, res) => {
  const { year, month, date } = req.params;
  const filePath = dataFilePath(year, month);

  // check if file exists, if not return error
  if (!fs.existsSync(filePath)) {
    return res.status(404).send({ error: "Data file does not exist." });
  }

  // read the data from file
  const data = fs.readFileSync(filePath, "utf-8");
  let parsedData = JSON.parse(data);

  // find the date of the item to remove
  const deletingDate = parsedData.findIndex(item => item.date == date);

  // if item not found, return error
  if (deletingDate === -1) {
    return res
      .status(404)
      .send({ error: `Data for ${month}-${year}-${date} not found.` });
  }

  // remove the item from the array
  parsedData.splice(deletingDate, 1);

  // write the updated data
  fs.writeFile(filePath, JSON.stringify(parsedData), (err) => {
    if (err) {
      return res
        .status(500)
        .send({ error: `Could not write to ${filePath} file.` });
    }

    res.send({ message: `Data for ${month}-${year}-${date} deleted successfully.` });
  });
});

// add new date
app.post("/data", (req, res) => {
  const { month, year, date } = req.body;
  const filePath = dataFilePath(year, month);

  // check if folder exists, if not create it
  const folderPath = path.dirname(filePath);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  // check if file exists, if not create it
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }

  // read the existing data
  const data = fs.readFileSync(filePath, "utf-8");
  let parsedData = JSON.parse(data);

  // check if the date already exists in the file
  const dateExists = parsedData.some((item) => {
    return item.month === month && item.year === year && item.date === date;
  });

  if (dateExists) {
    return res.status(400).send({ error: `Data already exists for ${month}/${year}` });
  }

  // add the new data
  parsedData.push(req.body);

  // write the updated data
  fs.writeFile(filePath, JSON.stringify(parsedData), (err) => {
    if (err) {
      return res
        .status(500)
        .send({ error: `Could not write to ${filePath} file.` });
    }

    res.send({ message: `Data added successfully in ${filePath}.` });
  });
});

app.get('/', (req, res)=>{
  res.status(200).send({message: "server is running"})
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
