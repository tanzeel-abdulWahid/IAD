import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "propertyModel",
    required: false,
  },
  investedAmount: { type: Number, required: true },
  rentEarned: { type: Number, required: true },
  nextRentDate: { type: String, required: true },
  rentPerMonth: { type: Number, required: true },
});

const walletSchema = new mongoose.Schema({
  totalAmount: { type: Number, required: true },
  amountAdded: { type: Number, required: true },
  amountWithdrawn: { type: Number, required: true },
  rentalIncome: { type: Number, required: true },
});

const userProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  joiningDate: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  authUser: { type: String, required: true },
  portfolio: { type: [portfolioSchema], required: true },
  wallet: { type: walletSchema, required: true },
});

const userProfilesModel = mongoose.model("profile", userProfileSchema);
export default userProfilesModel;

// teamid: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Team",
//   required: true,
// },
