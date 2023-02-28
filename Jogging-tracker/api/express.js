import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// get all data
app.get("/data/:year/:month", (req, res) => {
  const { year, month } = req.params;
  const filename = `${month}-${year}.json`;
  const filePath = path.join(process.cwd(), ".data", filename);

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

// add new data
app.post("/data", (req, res) => {
  const { month, year } = req.body;
  const filename = `${month}-${year}.json`;
  const folderPath = path.join(process.cwd(), ".data");
  const filePath = path.join(folderPath, filename);

  // check if folder exists, if not create it
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

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
