import express from "express";
const router = express.Router();

// GET /api/users
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Олег" },
    { id: 2, name: "Марія" }
  ]);
});

// POST /api/users
router.post("/", (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "Користувача створено", user: newUser });
});

export default router;