import mongoose from "mongoose";

const investmentSchema = mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "propertyModel",
    required: true,
  },
  isAvailable: Boolean,
  investedAmount: Number,
  investorsList: [
    {
      investorId: String,
      investingDate: String,
      calculatedPercentage: Number,
      amount: Number,
    },
  ],
});

const investmentModel = mongoose.model("investmentModel", investmentSchema);
export default investmentModel;
