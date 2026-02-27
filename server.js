const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "CODEpriyanshu@0006",   // put your mysql password here
  database: "student_db"  // 🔴 change this to your real db name
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database connection error:");
    console.log(err);
  } else {
    console.log("✅ MySQL Connected Successfully");
  }
});

app.get("/", (req, res) => {
  res.send("Server Working");
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
app.post("/login", (req, res) => {
  const { student_id, password } = req.body;

  const sql = "SELECT * FROM student_login WHERE student_id = ? AND password = ?";

  db.query(sql, [student_id, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    } else if (result.length > 0) {
      res.send("Login Successful ✅");
    } else {
      res.send("Invalid ID or Password ❌");
    }
  });
});