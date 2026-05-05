import express, { response } from "express";
import taskRoute from "./routes/taskRoutes.js";
const app = express();
app.use("/api/tasks", taskRoute);

app.listen(5001, () => {
  console.log("server is running!");
});
