import express from "express";
import db from "./config/msql.js";

const router = express.Router();

/* ADD ORDER */
router.post("/", (req, res) => {
  const { user_id, food_id, amount, code, arr_sub_id } = req.body;

  const sql = `
    INSERT INTO Orders (user_id, food_id, amount, code, arr_sub_id)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [user_id, food_id, amount, code, arr_sub_id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order success" });
  });
});

export default router;
