const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("College Backend Server Running Successfully 🚀");
});
/* ---------- STUDENT DATABASE ---------- */

const studentDB = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "CODEpriyanshu@0006",
  database: "student_db"
});

studentDB.connect((err)=>{
  if(err){
    console.log("Student DB Error",err);
  }else{
    console.log("✅ Student Database Connected");
  }
});


/* ---------- FACULTY DATABASE ---------- */

const facultyDB = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "CODEpriyanshu@0006",
  database: "faculty_db"
});

facultyDB.connect((err)=>{
  if(err){
    console.log("Faculty DB Error",err);
  }else{
    console.log("✅ Faculty Database Connected");
  }
});


/* ---------- STUDENT LOGIN ---------- */

app.post("/login",(req,res)=>{

  const {student_id,password}=req.body;

  const sql="SELECT * FROM student_login WHERE student_id=? AND password=?";

  studentDB.query(sql,[student_id,password],(err,result)=>{

    if(err){
      res.send("Server Error");
    }
    else if(result.length>0){
      res.send("Login Successful");
    }
    else{
      res.send("Invalid ID or Password");
    }

  });

});


/* ---------- FACULTY LOGIN ---------- */

app.post("/faculty-login",(req,res)=>{

  const {faculty_id,password}=req.body;

  const sql="SELECT * FROM faculty_login WHERE faculty_id=? AND password=?";

  facultyDB.query(sql,[faculty_id,password],(err,result)=>{

    if(err){
      res.send("Server Error");
    }
    else if(result.length>0){
      res.send("Faculty Login Successful");
    }
    else{
      res.send("Invalid Faculty ID or Password");
    }

  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});