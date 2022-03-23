
// recherche par rights
// http://localhost:8080/rights/:name_rights
const getRightsByUsers = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST"
    );
    const param = [req.body.id_user];
    // Exécute une requête SQL de type SELECT
    connexion.query("SELECT R.id_right,R.name_right FROM rights_users as RU inner join rights as R on RU.id_right = R.id_right WHERE RU.id_user  = ?", param, (err, rows, fields) => {
      // SI OK
      if (!err) {
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" );
      }
    });
  
  };

  
module.exports = {
  getRightsByUsers
  }
  