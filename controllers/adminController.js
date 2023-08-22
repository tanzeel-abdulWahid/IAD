import authModel from "../models/authModel.js";
import investmentModel from "../models/investmentModel.js";
import propertyModel from "../models/propertiesModel.js";
import userFinancesModel from "../models/userFinancesModel.js";
import userProfilesModel from "../models/userProfilesModel.js";

export const createAdminProperty = async (req, res) => {
  try {
    const { formValues, timelineStages, featuresRadio, image } = req.body;

    // if any element in the features radio is not false then check if there heading or details property is empty string or not
    featuresRadio.current.forEach((feature) => {
      if (feature.heading === "" || feature.details === "") {
        throw "featuresErr";
      }
    });

    timelineStages.forEach((stage) => {
      if (stage.heading === "" || stage.details === "") {
        throw "timelineErr";
      }
    });

    const finalFeatures = featuresRadio.current.filter((f) => f !== false);

    const property = await propertyModel.create({
      propertyName: formValues.propName,
      totalValue: Number(formValues.price),
      city: formValues.city,
      location: formValues.city,
      lowestValue: 500,
      image,

      propertyFeatures: {
        noBaths: formValues.noOfBaths,
        noBeds: formValues.noOfBeds,
        converedArea: formValues.coveredArea,

        featureSection: finalFeatures,
        propertyOverview: formValues.propertyOverview,
      },
      financialDetails: {
        transactionCost: Number(formValues.transactionCost),
        stakeFee: Number(formValues.stakeFee),
        valueAppr: Number(formValues.valueAppr),
        annualReturn: Number(formValues.annualReturn),
        financeInfo: formValues.financeInfo,
        rent: formValues.rent,
      },
      fundingTimeline: timelineStages,
      locationDetails: formValues.locationDetails,
    });

    const investmentModelRes = await investmentModel.create({
      property: property._id,
      isAvailable: true,
      totalPrice: property.totalValue,
      investedAmount: 0,
      investorsList: [],
    });
    // await investmentModelRes.populate("property");

    console.log("Property id: ", property.propertyName);
    res.status(200).json({ success: true, date: property });
  } catch (e) {
    if (e === "featuresErr") {
      res.status(500).json({
        message:
          "Any feature is missing heading or details, cannot process the request",
      });
    } else if (e === "timelineErr") {
      res.status(500).json({
        message:
          "Any timeline stage is missing dates or details, cannot process the request",
      });
    } else {
      console.log(e);
      res.status(500).json({ message: "Error from server, please try again!" });
    }
  }
};

export const approveMoneyRequest = async (req, res) => {
  // the client would tell us the which usernames's request needs to be approved and which transactionId needs to be approved.

  const { profile, transactionId } = req.body;

  try {
    const user = await userFinancesModel.findOne({
      profile,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const requestIndex = user.moneyAddRequest.findIndex(
      (request) =>
        request.transactionId === transactionId && request.approved === false
    );
    if (requestIndex === -1) {
      return res.status(404).json({ message: "Money add request not found." });
    }

    user.moneyAddRequest[requestIndex].approved = true;
    await user.save();

    try {
      // const auth = await authModel.findById({ authId });
      const profileRes = await userProfilesModel.findById(profile);
      //add the money into the wallet of this profile

      profileRes.wallet.totalAmount +=
        user.moneyAddRequest[requestIndex].amount;
      profileRes.wallet.amountAdded +=
        user.moneyAddRequest[requestIndex].amount;

      const updatedProfile = await profileRes.save();
      res
        .status(200)
        .json({ success: true, data: { profile: updatedProfile } });
    } catch (e) {
      user.moneyAddRequest[requestIndex].approved = false;
      await user.save();
      return res
        .status(500)
        .json(
          "Some error has occured while adding the amount in the wallet, please retry"
        );
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const getMoneyRequests = async (req, res) => {
  const finances = await userFinancesModel.find({}).populate("profile");
  // console.log(finances[0].moneyAddRequest);
  if (!finances.length) {
    return res.status(500).json({ data: "no requests objects created" });
  }

  const financesRes = [];
  // Use map instead of forEach to create an array of promises
  const promises = finances.map(async (x) => {
    const { email } = await authModel.findById(x.profile.authUser, {
      email: 1,
    });

    const updatedMoneyRequest = x.moneyAddRequest.filter(
      (moneyRequest) => moneyRequest.approved === false
    );

    if (updatedMoneyRequest.length) {
      financesRes.push({
        ...x._doc,
        moneyAddRequest: updatedMoneyRequest,
        email,
      });
    }
  });

  // Wait for all promises to complete before returning the response
  await Promise.all(promises);

  return res.status(200).json({ status: "Success", data: financesRes });
};

export const getAllUsers = async (req, res) => {
  try {
    let userProfiles = await userProfilesModel
      .find({})
      .populate("portfolio.property");
    if (!userProfiles.length) {
      res.status(300).json({ success: false, data: "No Profiles" });
    }
    console.log(userProfiles);
    // total investment
    const userProfilesUpdated = userProfiles.map((p) => {
      let totalInvestment = 0;
      let totalEarning = 0;
      p.portfolio.forEach((x) => {
        totalInvestment += x.investedAmount;
        totalEarning += x.rentEarned;
      });
      return { ...p._doc, totalInvestment, totalEarning };
    });
    res.status(200).json({ success: true, data: userProfilesUpdated });
  } catch (e) {
    res.status(500).json({ success: false });
    console.log(e);
  }
};
