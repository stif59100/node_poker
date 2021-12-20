const mysql = require('mysql');

// Connexion à la BD
// connexion bdd
const connexion = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "poker",
});
connexion.connect();

module.exports = connexion