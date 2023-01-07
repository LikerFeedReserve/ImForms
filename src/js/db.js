const mysql = require("mysql2");

const connectionOptions = {
  host: "localhost",
  user: "root",
  password: "87304Va",
  database: "mydb",
};

const db = mysql.createConnection(connectionOptions);

module.exports = { db };
