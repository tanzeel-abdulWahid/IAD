import express from "express";
import {
  deleteusersdata,
  signin,
  signup,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.delete("/deleteusersdata", deleteusersdata);

export default router;
