const express = require("express");
const router = express.Router();

const controllerUsers = require("./controllers/users/users");
const controllerRound = require("./controllers/rounds_players/round_players");
const controllerRights = require('./controllers/rights/right');
const controllerRegister = require("./controllers/registers/register");
const controllerAuthentication = require('./controllers/authentications/authentification')
const controllerRightsUsers = require('./controllers/rights_users/rights_users')
const controllerRounds = require('./controllers/rounds/rounds')

const routes = (app) => {


    router.get("/users", controllerUsers.getUsers);
    router.get("/user/:id", controllerUsers.getUserById);

    router.get("/roundByRoundId/:id", controllerRound.getRoundByRoundId);
    router.get("/roundByUserId/:id", controllerRound.getRoundByUserId);

    router.post("/authentication", controllerAuthentication.getAuthentication);
    router.post("/register", controllerRegister.setRegister);

    router.get("/rights", controllerRights.getRights);
    router.get("/right/:name", controllerRights.getRightsByName);
    router.post("/rightsByUsers/:id",controllerRightsUsers.getRightsByUsers);
    
    router.get("/rounds",controllerRounds.getRounds);
    router.post("/round/add",controllerRounds.setRound);
    app.use(router);
};

module.exports = routes;
