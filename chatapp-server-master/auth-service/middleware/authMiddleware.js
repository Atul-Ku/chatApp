import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  const token = req.cookies["chattu-token"];
  if (!token) return res.status(401).json({ success:0, message: "Unauthorized" });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ success:0, message: "Unauthorized" });
    req.user = decoded;
    next();
  });
};

const adminOnly = (req, res, next) => {
  const token = req.cookies["chattu-admin-token"];
  if (!token) return res.status(401).json({ success:0, message: "Unauthorized" });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ success:0, message: "Unauthorized" });
    req.admin = decoded;
    next();
  });
};

export { isAuthenticated, adminOnly };