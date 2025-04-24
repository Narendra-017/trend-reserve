const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
   let token;

   if (req.headers.authorization && req.headers.authorization.toLowerCase().startsWith("bearer ")) {
      token = req.headers.authorization.split(" ")[1];

      if (!token) {
         return res.status(401).json({ message: "Not authorized, token missing" });
      }

      try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         const user = await User.findById(decoded.user.id).select("-password");

         if (!user) {
            return res.status(401).json({ message: "User not found, authorization denied" });
         }

         req.user = user;
         next();
      } catch (error) {
         if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired, please login again" });
         }
         console.error("Token verification failed:", error);
         return res.status(401).json({ message: "Invalid token" });
      }
   } else {
      return res.status(401).json({ message: "Not authorized, no token provided" });
   }
};

const admin = (req, res, next) => {
   if (req.user && req.user.role === "admin") {
      next();
   } else {
      return res.status(403).json({ message: "Not authorized as an admin" });
   }
};

module.exports = { protect, admin };
