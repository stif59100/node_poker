const express = require('express');
const playerRound = require("../manches/PlayerRound");
const router = express.Router();
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

// recherche de tous les utilisateurs
// http://localhost:8080/users
router.get("/users", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
   
    // Exécute une requête SQL de type SELECT
    connexion.query("SELECT * FROM utilisateur ",(err, rows, fields) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    });
   });

// recherche par id
// http://localhost:8080/user/:id
router.get("/user/:id", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
      //const param = 'id'
  const param = req.params.id
    // Exécute une requête SQL de type SELECT
    connexion.query("SELECT * FROM utilisateur WHERE id_utilisateur = ?",param, (err, rows, fields) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    });
    
  });


// recherche de tous les droits
// http://localhost:8080/droit
router.get("/droit", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
  
    
    // Exécute une requête SQL de type SELECT
    connexion.query("SELECT * FROM droit ",(err, rows, fields) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    });
    
  });

  // recherche par droit
// http://localhost:8080/droits/:nom_droit
router.get("/droits/:nom_droit", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
      //const param = 'nom_droit'
  const param = req.params.nom_droit
    // Exécute une requête SQL de type SELECT
    connexion.query("SELECT * FROM droit WHERE nom_droit = ?",param, (err, rows, fields) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    });
    
  });

  // recherche des droits
// http://localhost:8080/droits
router.get("/droits", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
  
    
    //const param = 'nom_droit'
      // Exécute une requête SQL de type SELECT
    connexion.query("SELECT * FROM droit", (err, rows, fields) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    });
    
  });


  //inscription //

  // http://localhost:8080/inscription
router.get("/inscription", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
  
      const params = [req.query.nom_utilisateur, req.query.prenom_utilisateur, req.query.pseudo_utilisateur, req.query.email_utilisateur, req.query.mot_de_passe_utilisateur]
      // Exécute une requête SQL de type SELECT
      connexion.query('INSERT INTO utilisateur(nom_utilisateur, prenom_utilisateur, pseudo_utilisateur, email_utilisateur, mot_de_passe_utilisateur) VALUES(?,?,?,?,?)', params, (err, affected) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    });
    
  });

  router.get("/joueurmancheparmanche/:idmanche", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
   
    // Exécute une requête SQL de type SELECT
    connexion.query("SELECT * FROM manche_joueur ",(err, rows, fields) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    });
   });

   router.get("/joueurmancheparutilisateur/:idjoueur", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
   
    // Exécute une requête SQL de type SELECT
    connexion.query("SELECT * FROM manche_joueur ",(err, rows, fields) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    });
   });


module.exports = router;