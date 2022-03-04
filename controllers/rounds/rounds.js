const { parseXML } = require("jquery");

connexion = require("../../connexion")

const getRounds = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  const param = req.params.id
  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT * FROM round", (err, rows, fields) => {
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
    var hour = req.body.hour
    var name = req.body.name
    var points_attributs = req.body.points_attributs
    var close= false
    var open= req.body.open
    var maxPlayer=  req.body.maxPlayer
    var buyIn= req.body.buyIn
    var rake= req.body.rake
    var stack = req.body.stack
    var addon =  req.body.addon
    var rebuy = req.body.rebuy
    var bounty = req.body.bounty
    var params = []
    params.push(date)
    params.push(hour)
    params.push(name)
    params.push(points_attributs)
    params.push(close)    
    params.push(open)
    params.push(maxPlayer)
    params.push(buyIn)
    params.push(rake)
    params.push(stack)
    params.push(addon)
    params.push(rebuy)
    params.push(bounty)
    console.log(params)
    
    // Exécute une requête SQL de type SELECT
    connexion.query(
        "INSERT INTO `round`(`date_round`,`hour_round`, `name_round`, `points_attributs`, `close`, `open`, `max_player`,`buy_in`,`rake`,`stack`,`addon`,`rebuy`,`bounty`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",params,
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

  const deleteRound = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "DELETE"
    );
    const param = req.body.join(',')
      console.log(param)
    // Exécute une requête SQL de type SELECT
    connexion.query("DELETE FROM round where id_round in (?)", param, (err, rows, fields) => {
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
  setRound,
  getRounds,
  deleteRound
};
