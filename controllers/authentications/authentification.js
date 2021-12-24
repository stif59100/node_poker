const { param } = require("jquery");
const connexion = require("../../connexion")

const getAuthentication = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET"
    );
    var email = req.body.email
    var password = req.body.password
    var params = []
    params.push(email)
    params.push(password)
    // Exécute une requête SQL de type SELECT
    connexion.query("SELECT * FROM user where email_user = ? and password_user = ? LIMIT 1 ",params,(err, rows, fields) => {
        // SI OK
        if (!err) {
            console.log(fields);
            res.status(200).json(rows[0]);
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