// connexion.js
// chargement du pilote mysql
const mysql = require('mysql2');

const database = {
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_DB,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  multipleStatements: true
}
console.log(database)
// Connexion à la BD
// connexion bdd
const connexion = mysql.createConnection(database);

connexion.connect();

module.exports = connexion