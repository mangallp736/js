const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/bankDB")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

app.use("/api", require("./routes/auth"));

app.listen(5000, () => console.log("Server Running on Port 5000"));