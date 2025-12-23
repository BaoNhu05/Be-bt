import express from "express";
import db from "./config/msql.js";

const router = express.Router();

/* LIKE */
router.post("/", (req, res) => {
  const { user_id, res_id } = req.body;

  const sql = `
    INSERT INTO Like_res (user_id, res_id, date_like)
    VALUES (?, ?, NOW())
  `;

  db.query(sql, [user_id, res_id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Like success" });
  });
});

/* UNLIKE */
router.delete("/", (req, res) => {
  const { user_id, res_id } = req.body;

  const sql = `
    DELETE FROM Like_res
    WHERE user_id = ? AND res_id = ?
  `;

  db.query(sql, [user_id, res_id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Unlike success" });
  });
});

/* GET LIKE BY RESTAURANT */
router.get("/restaurant/:res_id", (req, res) => {
  const sql = "SELECT * FROM Like_res WHERE res_id = ?";
  db.query(sql, [req.params.res_id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

/* GET LIKE BY USER */
router.get("/user/:user_id", (req, res) => {
  const sql = "SELECT * FROM Like_res WHERE user_id = ?";
  db.query(sql, [req.params.user_id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

export default router;
