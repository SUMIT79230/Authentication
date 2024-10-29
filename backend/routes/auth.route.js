import express from "express";
const router = express.Router();
import { login, signup , logout} from "../controllers/auth.controller.js";

router.post("/signup",signup);
router.post("/login",login);
router.get("/logout",logout);

export default router;