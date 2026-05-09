import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nguyenvanngu274_db_user:otdNvJwLmSkk47lh@cluster0.qrbdszq.mongodb.net/?appName=Cluster0",
    );
  } catch (error) {}
};
