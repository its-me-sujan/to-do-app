require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB).then(() => {
  console.log("connected to MongoDb");
});

const app = express();
const indexRouter = require("./routes");
const PORT = process.env.PORT || 8700;

app.use(cors());
app.use(express.json());
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
