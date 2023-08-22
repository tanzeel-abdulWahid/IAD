import authModel from "../models/authModel.js";
import investmentModel from "../models/investmentModel.js";
import propertyModel from "../models/propertiesModel.js";
import userFinancesModel from "../models/userFinancesModel.js";
import userProfilesModel from "../models/userProfilesModel.js";

export const getProperties = async (req, res) => {
  try {
    const investments = await investmentModel
      .find(
        {},
        { property: 1, isAvailable: 1, investedAmount: 1, investorsList: 1 }
      )
      .populate("property");

    const formattedInvestments = investments.map((investment) => {
      const numInvestors = investment.investorsList.length;
      return {
        property: investment.property,
        isAvailable: investment.isAvailable,
        investedAmount: investment.investedAmount,
        numInvestors: numInvestors,
      };
    });

    res.status(200).json({ status: true, data: formattedInvestments });
  } catch (e) {
    res.status(500).json({ message: e });
    console.log(e);
  }
};

export const clientInvest = async (req, res) => {
  const { propertyId, amount, investingDate, investorId } = req.body;

  try {
    // which property
    // console.log(propertyId);
    const property = await investmentModel
      .findOne({
        property: propertyId,
      })
      .populate("property");

    // console.log(property);
    // const realProperty = await propertyModel.findById(propertyId);

    let userAuth = await authModel.findById(investorId);

    if (!userAuth) {
      return res.status(500).json("No User");
    }

    let profile = await userProfilesModel.findOne({ authUser: userAuth._id });

    // console.log("profile", profile);

    if (profile.wallet.totalAmount < Number(amount)) {
      return res.status(500).json("No Balance");
    }

    if (property.isAvailable) {
      // console.log("property Available");
      if (
        property.investedAmount + Number(amount) <=
        property.property.totalValue
      ) {
        // console.log("Investment is possible");
        if (!property.investorsList.some((e) => e.investorId === investorId)) {
          console.log("The User never Invested");
          // if user had never invested in the property
          // const updatedprop = await investmentModel.findOneAndUpdate(
          //   { propertyId },
          //   {
          //     $push: {
          //       investorsList: {
          //         investorsUsername,
          //         investingDate,
          //         calculatedPercentage:
          //           (Number(amount) / property.totalPrice) * 100,
          //         amount: Number(amount),
          //       },
          //     },
          //     $inc: { investedAmount: Number(amount) },
          //     isAvailable:
          //       property.investedAmount + Number(amount) < property.totalPrice,
          //   }
          // );

          console.log(property.property.totalValue);

          property.investorsList.push({
            investorId,
            investingDate,
            calculatedPercentage:
              (Number(amount) / property.property.totalValue) * 100,
            amount: Number(amount),
          });
          property.investedAmount += Number(amount);
          property.isAvailable =
            property.investedAmount + Number(amount) <
            property.property.totalValue;

          // add the property to the user profile and deduct the wallet amount

          const date = new Date();
          date.setDate(date.getDate() + 30);

          console.log("Pushing in profile portfolio");

          profile.portfolio.push({
            property: propertyId,
            investedAmount: Number(amount),
            rentEarned: 0,
            nextRentDate: date.toDateString(),
            rentPerMonth:
              (property.property.financialDetails.rent / 100) *
              (amount / property.property.totalValue) *
              100,
          });

          profile.wallet.totalAmount -= Number(amount);
          // await profile.populate("property");

          const numInvestors = property.investorsList.length;
          const updatedprop = await property.save();
          let profileRes = await profile.save();

          return res.status(200).json({
            success: true,
            property: {
              property: updatedprop.property,
              isAvailable: updatedprop.isAvailable,
              investedAmount: updatedprop.investedAmount,
              numInvestors,
            },
          });
        } else {
          try {
            console.log("Has Already Invested");
            // const updatedprop = await investmentModel.findOneAndUpdate(
            //   {
            //     propertyId,
            //     "investorsList.investorsUsername": investorsUsername,
            //   },
            //   {
            //     $inc: {
            //       "investorsList.$.calculatedPercentage":
            //         (Number(amount) / property.totalPrice) * 100,
            //       "investorsList.$.amount": Number(amount),
            //       investedAmount: Number(amount),
            //     },
            //     $set: {
            //       "investorsList.$.investingDate": investingDate,
            //     },

            //     isAvailable:
            //       property.investedAmount + Number(amount) <
            //       property.totalPrice,
            //     // true,
            //   }
            // );

            const propertyIndex = property.investorsList.findIndex(
              (i) => i.investorId === investorId
            );
            property.investorsList[propertyIndex].calculatedPercentage +=
              (Number(amount) / property.property.totalValue) * 100;

            property.investorsList[propertyIndex].amount += Number(amount);

            property.investedAmount += Number(amount);

            property.isAvailable =
              property.investedAmount + Number(amount) <
              property.property.totalValue;

            console.log("The property got updated", property);

            // console.log(
            //   "profile.portfolio[0]",
            //   profile.portfolio[0].property.toString() === propertyId
            // );

            const reqIndex = profile.portfolio.findIndex(
              (i) => i.property._id.toString() === propertyId
            );

            console.log("reqIndex", reqIndex);
            console.log(
              "profile.portfolio[reqIndex]",
              profile.portfolio[reqIndex]
            );

            // console.log(
            //   profile.portfolio[0].propertyId === propertyId,
            //   "\n",
            //   profile.portfolio[0].propertyId,
            //   "\n",
            //   propertyId
            // );

            // console.log(reqIndex);

            // console.log("Profile ", {
            //   ...profile.portfolio[reqIndex]._doc,
            //   ali: 0,
            // });

            profile.portfolio.splice(reqIndex, 1, {
              ...profile.portfolio[reqIndex]._doc,
              rentPerMonth:
                (property.property.financialDetails.rent / 100) *
                property.investorsList[propertyIndex].calculatedPercentage,
              investedAmount:
                profile.portfolio[reqIndex]._doc.investedAmount +
                Number(amount),
            });
            // console.log("reqIndex", reqIndex);

            // console.log("Profile ", profile.portfolio[reqIndex]);

            profile.wallet.totalAmount -= Number(amount);

            const numInvestors = property.investorsList.length;
            const updatedprop = await property.save();

            // const formattedInvestments = investments.map((investment) => {
            //   const numInvestors = investment.investorsList.length;
            //   return {
            //     property: investment.property,
            //     isAvailable: investment.isAvailable,
            //     investedAmount: investment.investedAmount,
            //     numInvestors: numInvestors,
            //   };
            // });

            let profileRes = await profile.save();

            return res.status(200).json({
              success: true,
              data: {
                profileRes,
                property: {
                  property: updatedprop.property,
                  isAvailable: updatedprop.isAvailable,
                  investedAmount: updatedprop.investedAmount,
                  numInvestors,
                },
              },
            });
          } catch (e) {
            res.status(500).json({ message: "Something went wrong" });
            console.log(e);
          }
        }
      } else {
        return res.status(400).json({ message: "too high" });
      }
    } else {
      return res.status(400).json({ message: "Property isn't available" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
    console.log(e);
  }
};

export const moneyAddRequest = async (req, res) => {
  const { profile, reqDate, transactionId, imageLink, amount } = req.body;

  try {
    let user = await userFinancesModel.findOne({ profile });
    // let userAuth = await authModel.findById({ authId });

    // if (!user && userAuth) {
    // Create a new user if one doesn't already exist
    // user = await userFinancesModel.create({ authId, moneyAddRequest: [] });
    // }
    if (!user) {
      return res.status(400).json({ message: "User is not registered" });
    }

    // Push the new money add request to the user's moneyAddRequests array

    user.moneyAddRequest.push({
      reqDate,
      transactionId,
      imageLink,
      amount,
      approved: false,
    });

    // Save the user to the database
    const updatedFinances = await user.save();

    res.status(200).json({ success: true, updatedFinances });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
export const getUserFinances = async (req, res) => {
  const { profileId } = req.query;
  // console.log(req.param);
  try {
    let finances = await userFinancesModel.findOne({ profile: profileId });
    let profile = await userProfilesModel.findById(profileId);
    console.log(finances);
    if (!finances) {
      return res
        .status(400)
        .json({ message: "User Finances are not registered" });
    }

    res.status(200).json({ success: true, data: { finances, profile } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
