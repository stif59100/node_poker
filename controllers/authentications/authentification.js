const { param } = require("jquery");
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
        if (!err) {
            let user = new User()
            rows.forEach(element => {
                
                user.setIdUser(element.id_user)
                user.setNameUser(element.name_user)
                user.setFirstNameUser(element.firstame_user)
                user.setEmailUser(element.email_user)
                user.setPseudoUser(element.pseudo_user)
                user.setPassword(element.password_user)
                console.log(user);
               

            });
            console.log(user);
            res.status(200).json(user);
           
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