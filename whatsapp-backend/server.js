import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

// app config....
const app = express();
const port = process.env.PORT || 8080;

const pusher = new Pusher({
  appId: "1120831",
  key: "69a7ca2d8b224b1fcb10",
  secret: "f9b525c00ef5013e6305",
  cluster: "eu",
  useTLS: true,
});

// middleware....
app.use(express.json());

// DB config....
const connection_url =
  "mongodb+srv://admin:rt941olDHz09mpkm@cluster0.5j2ed.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("db is connected!");

  const msgCollection = db.collection("messagecontent");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("change =>", change);
  });
});

// ?????

// api routes....
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created : \n ${data}`);
    }
  });
});

// => listener....
app.listen(port, () => console.log(`listening on localhost: ${port}`));
