const connexion = require("../../connexion");
const User = require("../../dto/User");



class test{

  insert = ()=>{}
}


// recherche de tous les utilisateurs
// http://localhost:8080/users
const getUsers = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );

  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT * FROM utilisateur ", (err, rows, fields) => {
    // SI OK
    if (!err) {
      let users = []
      rows.forEach(element => {
        let user = new User()
        user.setIdUser(element.id_user)
        user.setNameUser(element.name_user)
        user.setFirstNameUser(element.firstame_user)
        user.setEmailUser(element.email_user)
        user.setPseudoUser(element.pseudo_user)
        user.setPassword(element.password_user)
        users.push(user)

      });
      console.log(rows);
      res.status(200).json(users);
    }
    // Si KO
    else {
      console.log("\nErreur d'exécution de la requête !" + err);
      res.status(200).json("\nErreur d'exécution de la requête !" + err);
    }
  });
};



// recherche par id
// http://localhost:8080/user/:id
const getUserById = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  //const param = 'id'
  const param = req.params.id
  // Exécute une requête SQL de type SELECT
  connexion.query("SELECT * FROM utilisateur WHERE id_utilisateur = ?", param, (err, rows, fields) => {
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

//updateUser
// http://localhost:8080/UpdateUser
const UpdateUserById = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  //const param = 'id'
  console.log(req.query)
  const param = [req.query.name_user, req.query.firstname_user, req.query.pseudo_user, req.query.email_user,  req.query.id_user]
  // Exécute une requête SQL de type SELECT
  connexion.query("CALL updateUser(?, ?, ?, ?, ?)", param, (err, rows, fields) => {
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
  getUserById,
  getUsers,
  UpdateUserById
};