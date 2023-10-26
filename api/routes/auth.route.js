import express from "express";
import {
  goggle,
  signin,
  signout,
  signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/google", goggle);

router.get("/signout", signout);

export default router;
