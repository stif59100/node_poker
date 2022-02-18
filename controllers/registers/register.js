
const connexion = require("../../connexion")
const User = require("../../dto/User")

// http://localhost:8080/register
const setRegister = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "POST"
      );
      const params = [req.body.name_user, req.body.firstname_user, req.body.pseudo_user, req.body.email_user, req.body.password_user]

      console.log(req.body)
      // Exécute une requête SQL de type SELECT
      connexion.query('INSERT INTO user(name_user, firstname_user, pseudo_user, email_user, password_user) VALUES(?,?,?,?,?)', params, (err, rows) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows.affectedRows);
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