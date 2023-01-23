import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const { PORT, DB_USER_NAME, DB_SECRET_KEY } = process.env;
const port = PORT || 8080;

const uri = `mongodb+srv://${DB_USER_NAME}:${DB_SECRET_KEY}@cluster0.qf4bw47.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
async function connectToMongoAndGetData() {
  try {
    client.connect();
    console.log("Connected to MongoDB");
    const joggingOk = client.db("jogging").collection("jogging-ok");

    //post date
    app.post("/signtoday", async (req, res) => {
      const response = await joggingOk.findOneAndUpdate(
        { date: req.body.date },
        { $set: req.body },
        { upsert: true, returnOriginal: true }
      );
      res.status(200).send({ response });
    });
    //load dates
    app.get("/dates/:year/:month", async (req, res) => {
      const { year, month } = req.params;
      const response = await joggingOk
        .find({ year: parseInt(year), month: parseInt(month) }, { projection: { date: 1, _id: 0 } })
        .toArray();
      res.status(200).send(response);
    });
  } finally {
    // client.close();
  }
}

connectToMongoAndGetData().catch(console.dir);

app.get("/", (req, res) => {
  res.send({ message: "jogging tracker server is running" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
