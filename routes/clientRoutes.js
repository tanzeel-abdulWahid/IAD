import express from "express";
import {
  getProperties,
  clientInvest,
  moneyAddRequest,
  getUserFinances,
} from "../controllers/clientController.js";

const router = express.Router();

router.get("/getproperties", getProperties);
router.post("/invest", clientInvest);
router.post("/addmoneyrequest", moneyAddRequest);
router.get("/getuserfinances", getUserFinances);

export default router;
