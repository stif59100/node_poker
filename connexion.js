// connexion.js
// chargement du pilote mysql
const mysql = require('mysql');

// Connexion à la BD
// connexion bdd
const connexion = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "poker",
  password: "poker",
  database: "poker",
  multipleStatements: true
});
connexion.connect();

module.exports = connexion