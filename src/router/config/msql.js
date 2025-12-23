import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "4321",
  database: "food_app",
});

db.connect((err) => {
  if (err) {
    console.log("❌ MySQL connection error", err);
  } else {
    console.log("✅ MySQL connected");
  }
});

export default db;
