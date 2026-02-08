import express from "express";
const router = express.Router();
import { isAuthenticated, adminOnly } from "../middleware/authMiddleware.js";
import authController from "../controllers/auth.controller.js";
import registerValidator from "../validator/registerValidator.js";
import validateHandler from "../validator/validateHandler.js";
import { singleAvatar } from "../../middlewares/multer.js";

router.get("/", (req, res) => {
  res.send("Welcome to the Auth Service");
});

router.post(
  "/register",
  singleAvatar,
  registerValidator(),
  validateHandler,
  authController.register,
);

export default router;
