import express from "express";
import {
  updateTask,
  createTask,
  getAllTask,
  deleteTask,
} from "../controllers/taskController.js";
const router = express.Router();

router.get("/", getAllTask);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
