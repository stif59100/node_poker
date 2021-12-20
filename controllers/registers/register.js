
const connexion = require("../../connexion")

// http://localhost:8080/inscription
const setRegister = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST"
    );
  
      const params = [req.query.nom_utilisateur, req.query.prenom_utilisateur, req.query.pseudo_utilisateur, req.query.email_utilisateur, req.query.mot_de_passe_utilisateur]
      // Exécute une requête SQL de type SELECT
      connexion.query('INSERT INTO utilisateur(nom_utilisateur, prenom_utilisateur, pseudo_utilisateur, email_utilisateur, mot_de_passe_utilisateur) VALUES(?,?,?,?,?)', params, (err, rows) => {
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
  setRegister
};