const connexion = require("../../connexion")
const User = require("../../dto/User");
//dao pour l'authentification
const getAuthentication = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET"
    );
    var email = req.body.emailOrLogin
    var login = req.body.emailOrLogin
    var password = req.body.password
    var params = []
    params.push(email)
    params.push(login)
    params.push(password)
    console.log(params)
    // Exécute une requête SQL de type SELECT
     connexion.query("SELECT * FROM user where (email_user = ? or pseudo_user = ?) and password_user = ? LIMIT 1 ", params, (err, rows, fields) => {
        console.log('authent')
        // SI OK
        if (!err && rows.length !== 0) {
            let user = new User(
                rows[0].id_user,
                rows[0].name_user,
                rows[0].firstname_user,
                rows[0].email_user,
                rows[0].pseudo_user,
                rows[0].password_user)
            let rights = [];
             connexion.query("SELECT rights.id_right,rights.name_right FROM poker.rights inner join rights_users on rights_users.id_right=rights.id_right where rights_users.id_user=?", [user.id_user], (err, rows, fields) => { 
                if (!err) {
                    console.log(" je recherche les droits utilisateur")
                    user.setRights(rows)
                    res.status(200).json(user);
                }
             });
           res.status(500)
           
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