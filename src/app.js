import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hola Mundo");
});

app.listen(3000, () => {
  console.log("app listen on port 3000");
});
