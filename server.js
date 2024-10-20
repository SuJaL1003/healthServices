const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
dotenv.config();
connectDb();
const app = express();

app.use(express.json());

app.use("/api/v1/service", require("./routes/serRoutes"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Healthcare Services</h1>");
});

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`Server Running on ${PORT}`);
});
