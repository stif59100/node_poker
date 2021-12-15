const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const pug = require('pug');
const mongoose = require('mongoose');
const app = express();

// utilisation de bootstrap
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/'));

// Récupération des données envoyées dans la requête HTTP
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importation des routes
app.use(require('./routes/sql/database'))
app.use(require('./routes/authentification/administrateur'))
app.use(require('./routes/authentification/utilisateur'))
app.use(require('./routes/inscription/inscription.js'))




app.listen(8080, () => {
    console.log("Serveur actif");
  });
  