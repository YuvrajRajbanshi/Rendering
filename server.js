import express from "express";
import env from "dotenv";

env.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello I am checking the server");
});

const ports = process.env.PORT || 4000;
app.listen(ports, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
