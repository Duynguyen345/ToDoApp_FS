export const getAllTask = (request, response) => {
  response.status(200).send("ban co 20 viec can lam");
};
export const createTask = (req, res) => {
  res.status(201).json({ message: "Nhiệm vụ mới đã đc thêm vào thành công!" });
};

export const updateTask = (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ  đã đc update  thành công!" });
};

export const deleteTask = (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ  đã được xóa  thành công!" });
};
