const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { authMiddleware } = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.get("/", async (req, res) => {
  const students = await prisma.student.findMany({ where: { userId: req.user.userId } });
  res.json(students);
});

router.post("/", async (req, res) => {
  const { name, score } = req.body;
  const student = await prisma.student.create({
    data: { name, score, userId: req.user.userId },
  });
  res.json(student);
});

router.put("/:id", async (req, res) => {
  const { name, score } = req.body;
  const student = await prisma.student.updateMany({
    where: { id: parseInt(req.params.id), userId: req.user.userId },
    data: { name, score },
  });
  res.json(student);
});

router.delete("/:id", async (req, res) => {
  const student = await prisma.student.deleteMany({
    where: { id: parseInt(req.params.id), userId: req.user.userId },
  });
  res.json(student);
});

module.exports = router;
