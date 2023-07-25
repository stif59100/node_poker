connexion = require("../../connexion");

const getChampiongShips = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  // Exécute une requête SQL de type SELECT
  connexion.query(
    "SELECT c.*, count(c.Id) as nbManche FROM championship as c inner JOIN championship_round as cr on c.Id = cr.championship_id GROUP by c.Id",
    (err, rows, fields) => {
      // SI OK
      if (!err) {
        res.status(200).json(rows);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    }
  );
};

const getChampionShipNotClose = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT * FROM championship ", (err, rows, fields) => {
    // SI OK
    if (!err) {
      res.status(200).json(rows);
    }
    // Si KO
    else {
      console.log("\nErreur d'exécution de la requête !" + err);
      res.status(200).json("\nErreur d'exécution de la requête !" + err);
    }
  });
};

const setChampiongShip = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  var dateBegin = req.body.dateBegin;
  var dateEnd = req.body.dateEnd;
  var name = req.body.name;

  var paramsChampionShip = [];
  paramsChampionShip.push(req.body.name);
  var params = [];
  params.push(name);
  params.push(dateBegin);
  params.push(dateEnd);
  params.push(new Date());

  // Exécute une requête SQL de type SELECT
  connexion.query(
    "INSERT INTO `championship`(`name`,`dateBegin`, `dateEnd`, `dateCreate`) VALUES (?,?,?,?); ",
    params,
    (err) => {
      // SI OK
      if (!err) {
        if (req.body.rounds.length > 0) {
          connexion.query(
            "Select id from `championship` where name=? order by Id desc limit 1", paramsChampionShip,
            (err, rows) => {
              if (err) {
                console.log(err)
              } else {

                for (let index in req.body.rounds) {
                  var paramsChampionshipRound = [];
                  paramsChampionshipRound.push(rows[0].id);
                  let roundId = req.body.rounds[index];
                  paramsChampionshipRound.push(roundId);
                  connexion.query(
                    "INSERT INTO `championship_round`( `championship_id`, `round_id`) VALUES (?,?)",
                    paramsChampionshipRound,
                    (err, rows, fields) => {
                      if (err) {
                        console.log("error insert championship_round:", err);
                        console.log("error insert championship_round_id:", roundId);
                      } else {
                        console.log("insert championship_round successful id", roundId);
                      }
                    }
                  );
                }
              }
              res.status(200).json(rows.affected);
            })
        }
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    }
  );
};
const updatChampiongShip = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  var dateBegin = req.body.dateBegin;
  var dateEnd = req.body.dateEnd;
  var name = req.body.name;
  var params = [];
  params.push(dateBegin);
  params.push(name);
  params.push(dateEnd);
  params.push(new Date());

  // Exécute une requête SQL de type SELECT
  connexion.query(
    "Update INTO `championship`(`name`,`dateBegin`, `dateEnd`, `dateCreate`) VALUES (?,?,?,?)",
    params,
    (err, rows, fields) => {
      // SI OK
      if (!err) {
        res.status(200).json(rows.affected);
      }
      // Si KO
      else {
        console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    }
  );
};

const deleteChampionShip = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "DELETE");

  console.log(req.body);
  // Exécute une requête SQL de type Delete
  connexion.query(
    "DELETE FROM championship where id in (?) ",
    [req.body],
    (err, rows, fields) => {
      // SI OK
      if (!err) {
        res.status(200).json(rows);
      }
      // Si KO
      else {
        //console.log("\nErreur d'exécution de la requête !" + err);
        res.status(200).json("\nErreur d'exécution de la requête !" + err);
      }
    }
  );
};

module.exports = {
  setChampiongShip,
  getChampiongShips,
  updatChampiongShip,
  deleteChampionShip,
};
