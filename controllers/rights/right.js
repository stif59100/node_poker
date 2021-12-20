const connexion = require("../../connexion")


// recherche de tous les droits
// http://localhost:8080/droit
const getRights = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );

  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT * FROM droit ", (err, rows, fields) => {
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

};

// recherche par droit
// http://localhost:8080/droits/:nom_droit
const getRightsByName = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  const param = req.params.name
  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT * FROM droit WHERE nom_droit = ?", param, (err, rows, fields) => {
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

};

module.exports = {
  getRightsByName,
  getRights
}
