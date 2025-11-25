const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");

router.use(authMiddleware, adminMiddleware);

router.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({ include: { students: true } });
  res.json(users);
});

module.exports = router;
