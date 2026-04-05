const express = require("express");
const router = express.Router();
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const SECRET = "banksecret";

// LOGIN / REGISTER
router.post("/login", async (req, res) => {
  try {
    const { name, pin } = req.body;

    let user = await User.findOne({ name }); // ✅ pehle declare

    if (!user) {
      user = new User({
        name,
        pin,
        balance: 10000,
        history: []
      });

      await user.save();
    }

    res.json({ user });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// DEPOSIT
router.post("/deposit", async (req, res) => {
  const { id, amount } = req.body;

  const user = await user.findById(id);

  user.balance += amount;

  user.history.push({
    type: "Credit",
    amount,
    time: new Date()
  });

  await user.save();

  res.json(user);
});

// WITHDRAW
router.post("/withdraw", async (req, res) => {
  const { id, amount } = req.body;

  const user = await user.findById(id);

  if (amount > user.balance) {
    return res.json({ msg: "Insufficient balance" });
  }

  user.balance -= amount;

  user.history.push({
    type: "Debit",
    amount,
    time: new Date()
  });

  await user.save();

  res.json(user);
});

// GET user
router.get("/user/:id", async (req, res) => {
  const user = await user.findById(req.params.id);
  res.json(user);
});

module.exports = router;