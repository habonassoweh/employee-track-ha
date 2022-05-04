const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "password",
    database: "employee",
  },
  console.log("Connected to the employee database.")
);

db.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log(" Has connected ");
});

module.exports = db;
