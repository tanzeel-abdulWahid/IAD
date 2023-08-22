import mongoose from "mongoose";
const propertySchema = mongoose.Schema({
  propertyName: {
    type: String,
    required: true,
  },
  totalValue: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  lowestValue: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },

  propertyFeatures: {
    noBaths: {
      type: String,
      required: true,
    },
    noBeds: {
      type: String,
      required: true,
    },
    converedArea: {
      type: String,
      required: true,
    },

    featureSection: [{ heading: String, details: String }],
    propertyOverview: String,
  },
  financialDetails: {
    transactionCost: Number,
    stakeFee: Number,
    valueAppr: Number,
    annualReturn: Number,
    financeInfo: String,
    rent: Number,
  },
  fundingTimeline: [{ date: String, details: String }],
  locationDetails: String,
});

const propertyModel = mongoose.model("propertyModel", propertySchema);
export default propertyModel;
