import mongoose from "mongoose";

const authSchema = mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

const authModel = mongoose.model("auth", authSchema);
export default authModel;
