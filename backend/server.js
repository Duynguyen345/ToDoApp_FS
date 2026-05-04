import express, { response } from "express";

const app = express();

app.listen(5001, () => {
  console.log("server is running!");
});

app.get("/api/tasks", (request, response) => {
  response.status(400).send("you has a lot tasks needing to do!");
});
