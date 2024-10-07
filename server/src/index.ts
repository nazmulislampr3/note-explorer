import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ done: true });
});

app.listen(5000, () => console.log("server started."));
