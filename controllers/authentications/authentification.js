const connexion = require("../../connexion")

const getAuthentication = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET"
    );

    // Exécute une requête SQL de type SELECT
    connexion.query("SELECT * FROM utilisateur ", (err, rows, fields) => {
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
    getAuthentication
};