import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

// router.get("/test", (req, res) => {
//   res.json({
//     message: "hello here from backend",
//   });
// });
router.get("/test", test);
export default router;
