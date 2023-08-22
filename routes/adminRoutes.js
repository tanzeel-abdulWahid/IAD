import express from "express";
import {
  approveMoneyRequest,
  createAdminProperty,
  getAllUsers,
  getMoneyRequests,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/createproperty", createAdminProperty);
router.post("/approverequest", approveMoneyRequest);
router.get("/getmoneyrequest", getMoneyRequests);
router.get("/getuserprofiles", getAllUsers);

export default router;
