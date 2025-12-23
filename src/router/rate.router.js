import express from "express";
import db from "./config/msql.js";

const router = express.Router();

/* ADD RATE */
router.post("/", (req, res) => {
  const { user_id, res_id, amount } = req.body;

  const sql = `
    INSERT INTO Rate_res (user_id, res_id, amount, date_rate)
    VALUES (?, ?, ?, NOW())
  `;

  db.query(sql, [user_id, res_id, amount], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Rate success" });
  });
});

/* GET RATE BY RESTAURANT */
router.get("/restaurant/:res_id", (req, res) => {
  db.query(
    "SELECT * FROM Rate_res WHERE res_id = ?",
    [req.params.res_id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

/* GET RATE BY USER */
router.get("/user/:user_id", (req, res) => {
  db.query(
    "SELECT * FROM Rate_res WHERE user_id = ?",
    [req.params.user_id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

export default router;
