import authModel from "../models/authModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userProfilesModel from "../models/userProfilesModel.js";
import userFinancesModel from "../models/userFinancesModel.js";
export const signup = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    console.log(req.body);

    let user;
    let newUser;
    let financeModel;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      user = await authModel.findOne({ email });
      if (user) {
        return res.status(400).json("Email Already Exists");
      }
      user = await authModel.create({
        email,
        password: hashedPassword,
        role: "user",
      });
    } catch (e) {
      console.log(e);
      return res.status(404).json("email already exists");
    }

    try {
      newUser = new userProfilesModel({
        name,
        joiningDate: new Date().toDateString(),
        phoneNumber,
        authUser: user._id,
        portfolio: [],
        wallet: {
          totalAmount: 0,
          amountAdded: 0,
          amountWithdrawn: 0,
          rentalIncome: 0,
        },
      });
      newUser = await newUser.save();
    } catch (e) {
      await authModel.deleteOne({ email: user.email });
      return res.status(404).json("error creating profile, please try again");
    }

    try {
      financeModel = await userFinancesModel.create({
        profile: newUser._id,
        moneyAddRequest: [],
      });
    } catch (error) {
      await authModel.deleteOne({ email: user.email });
      await userProfilesModel.deleteOne({ authUser: user._id });
      console.log(error);
      return res.status(500).json("error creating finances, please try again");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res
      .status(201)
      .json({ success: true, data: { profile: newUser, token, financeModel } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.role === "admin") {
      if (password === user.password) {
        res.status(200).json({ success: true, data: { profile: user } });
      } else {
        res.status(300).json({ message: "Invalid Credentials" });
      }
    } else {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const profile = await userProfilesModel.findOne({ authUser: user._id });
      const financeModel = await userFinancesModel.findOne({
        profile: profile._id,
      });

      if (!profile) {
        return res
          .status(400)
          .json({ success: false, data: "No Profile Found!" });
      }
      if (!financeModel) {
        return res
          .status(400)
          .json({ success: false, data: "No Finances Found!" });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      // console.log({ profile });
      res.status(200).json({
        success: true,
        data: {
          token,
          profile: { ...profile._doc, role: user.role },
          financeModel,
        },
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteusersdata = async (req, res) => {
  try {
    await authModel.deleteMany({});
    await userFinancesModel.deleteMany({});
    await userProfilesModel.deleteMany({});
    res.status(200).json("Deleted all");
  } catch (error) {
    console.log(error);
    res.status(500).json("Error Deleting");
  }
};
