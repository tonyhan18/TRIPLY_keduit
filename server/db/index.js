var mysql = require("mysql2/promise");

const conn = mysql.createPool({
  host: "10.5.104.105",
  user: "root",
  password: "TEst!234",
  database: "DB1",
});

module.exports = conn;
