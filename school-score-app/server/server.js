// server/server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const studentRoutes = require("./routes/students");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);

// Serve React frontend build
const frontendPath = path.join(__dirname, "../client/dist"); // server ở server/, frontend build ở client/dist
app.use(express.static(frontendPath));

// Nếu request không match API, trả về index.html (SPA React)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
