connexion = require("../../connexion")

const getRounds = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  const param = req.params.id
  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT * FROM round ", (err, rows, fields) => {
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

const getRoundsNotClose = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );

  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT * FROM round_player ", (err, rows, fields) => {
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



const setRound = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST"
    );
    var date = req.body.date
    var name = req.body.name
    var points= 0
    var close= false
    var open= req.body.open
    var params = []
    params.push(date)
    params.push(name)
    params.push(points)
    params.push(close)    
    params.push(open)
    console.log(params)
    
    // Exécute une requête SQL de type SELECT
    connexion.query(
        "INSERT INTO `round`(`date_round`, `name_round`, `points_attributs`, `close`, `open`) VALUES (?,?,?,?,?)",params,
        (err, rows, fields) => {
      // SI OK
      if (!err) {
        console.log(rows);
        res.status(200).json(rows.affected);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    });
  };

module.exports = {
  setRound,
  getRounds
};
