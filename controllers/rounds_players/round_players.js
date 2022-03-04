const connexion = require("../../connexion")

const getRoundByRoundId = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  const param = req.params.id_round
  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT user.name_user,user.firstname_user,user.pseudo_user, round_player.id_user,round.name_round,round.date_round,round.hour_round,round_player.id_round FROM (poker.round_player round_player INNER JOIN poker.round round ON (round_player.id_round = round.id_round)) INNER JOIN poker.user user ON (round_player.id_user = user.id_user) where round_player.id_round = ?", param,(err, rows, fields) => {
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

const getRoundByUserId = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  const param = req.params.id_user
  
  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT id_round FROM round_player where id_user = ? ", param, (err, rows, fields) => {
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
const registerRound = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST"
  );
  const param = [req.body.id_round, req.body.id_user]

  // Exécute une requête SQL de type SELECT
  connexion.query("INSERT INTO round_player(id_round, id_user, `points`) VALUES (?,?,0);", param, (err, rows, fields) => {
    // SI OK
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
      
    }
    // Si KO
    else {
      //console.log("\nErreur d'exécution de la requête !" + err);
      res.status(200).json("\nErreur d'exécution de la requête !" + err);
    }
  });
}
const unRegisterRound = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "DELETE"
  );
  const param = [req.body.id_round, req.body.id_user]

  // Exécute une requête SQL de type SELECT
  connexion.query("DELETE FROM round_player where id_round =? and id_user = ?;", param, (err, rows, fields) => {
    // SI OK
    if (!err) {
      console.log(rows);
      res.status(200).json(rows);
      
    }
    // Si KO
    else {
      //console.log("\nErreur d'exécution de la requête !" + err);
      res.status(200).json("\nErreur d'exécution de la requête !" + err);
    }
  });
};
module.exports = {
  getRoundByUserId,
  getRoundByRoundId,
  registerRound,
  unRegisterRound
};
