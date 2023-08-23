const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

/*const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ktk41026!",
  port: "3306",
  database: "dormitory",
});

connection.connect();*/

module.exports = { pool: pool };
