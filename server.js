const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const url = process.env.MONGO_URL;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e.message));

app.use("/", require("./routes/emailRoute"));

app.listen(process.env.PORT || 3001, () => console.log("Express is running"));
