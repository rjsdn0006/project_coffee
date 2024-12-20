require("dotenv").config();
const connectDb = require("./config/db");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080; // PORT가 없으면 3000을 이용
connectDb();

// API작성 부분 ----------------------------------------------------

app.get("/api/load", (req, res) => {
  res.send({ name: "우진", age: 99 });
});

// ----------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
