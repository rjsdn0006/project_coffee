require("dotenv").config();
const connectDb = require("./config/db");
const express = require("express");
const routes = require("./routes/mainRoute");

const app = express();
const PORT = process.env.PORT || 8080; // PORT가 없으면 3000을 이용

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use("/api", routes);

connectDb();

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
