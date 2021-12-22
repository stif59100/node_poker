const express = require("express");
const router = express.Router();

const controllerUsers = require("./controllers/users/users");
const controllerRound = require("./controllers/rounds/round");
const controllerRights = require('./controllers/rights/right');
const controllerRegister = require("./controllers/registers/register");
const controllerAuthentication = require('./controllers/authentications/authentification')

const routes = (app) => {


    router.get("/users", controllerUsers.getUsers);
    router.get("/user/:id", controllerUsers.getUserById);

    router.get("/roundByRoundId/:id", controllerRound.getRoundByRoundId);
    router.get("/roundByUserId/:id", controllerRound.getRoundByUserId);

    router.get("/authentication", controllerAuthentication.getAuthentication);
    router.post("/register", controllerRegister.setRegister)

    router.get("/rights", controllerRights.getRights);
    router.get("/right/:name", controllerRights.getRightsByName);

    app.use(router);
};

module.exports = routes;
