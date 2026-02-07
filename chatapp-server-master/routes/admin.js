import express from "express";
import {
  adminLogin,
  adminLogout,
  allChats,
  allMessages,
  allUsers,
  getAdminData,
  getDashboardStats,
} from "../controllers/admin.js";
import { adminLoginValidator, validateHandler } from "../lib/validators.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

app.post("/verify", adminLoginValidator(), validateHandler, adminLogin);

app.get("/logout", adminLogout);

// Only Admin Can Accecss these Routes

app.get("/", adminOnly, getAdminData);

app.get("/users", adminOnly, allUsers);
app.get("/chats", adminOnly, allChats);
app.get("/messages", adminOnly, allMessages);

app.get("/stats", getDashboardStats);

export default app;
