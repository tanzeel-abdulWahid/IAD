import mongoose from "mongoose";

const moneyAddRequestSchema = new mongoose.Schema({
  reqDate: { type: Date, required: true },
  transactionId: { type: String, required: true },
  imageLink: { type: String, required: true },
  amount: { type: Number, required: true },
  approved: { type: Boolean, required: true },
});

const userFinancesSchema = new mongoose.Schema({
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "profile" },
  moneyAddRequest: { type: [moneyAddRequestSchema], required: true },
});

const userFinancesModel = mongoose.model("finance", userFinancesSchema);
export default userFinancesModel;
