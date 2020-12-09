// => importing....
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

// => app config....
const app = express();
const port = process.env.PORT || 8080;

// => middleware....
app.use(express.json());

// => DB config....
// mongodb+srv://admin:<password>@cluster0.5j2ed.mongodb.net/<dbname>?retryWrites=true&w=majority
const connection_url =
  "mongodb+srv://admin:rt941olDHz09mpkm@cluster0.5j2ed.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// => ?????
// admin password => rt941olDHz09mpkm

// => api routes....
app.get("/", (req, res) => res.status(200).send("hello world"));

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
