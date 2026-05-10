import "dotenv/config";
import express from "express";
import taskRoute from "./routes/taskRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();
app.use("/api/tasks", taskRoute);

const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
  console.log(`Server đang chạy tại port ${PORT} 🚀`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Port ${PORT} đang bị chiếm! Đang thoát...`);
    console.error(`👉 Chạy lệnh này để giải phóng port: npx kill-port ${PORT}`);
    process.exit(1);
  } else {
    throw err;
  }
});
