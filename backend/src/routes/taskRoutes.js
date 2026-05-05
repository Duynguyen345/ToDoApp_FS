import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.status(400).send("you has a lot tasks needing to do!");
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Nhiệm vụ mới đã đc thêm vào thành công!" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ  đã đc update  thành công!" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ  đã được xóa  thành công!" });
});

export default router;
