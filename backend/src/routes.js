const express = require("express");
const router = express.Router();


const controllerUsers = require("./controllers/users/users");
const controllerRoundPlayer = require("./controllers/rounds_players/round_players");
const controllerRights = require('./controllers/rights/right');
const controllerRegister = require("./controllers/registers/register");
const controllerAuthentication = require('./controllers/authentications/authentification')
const controllerRightsUsers = require('./controllers/rights_users/rights_users')
const controllerRounds = require('./controllers/rounds/rounds')
const controllerChampionShip = require('./controllers/championship/championship')

const routes = (app) => {


    router.get("/users", controllerUsers.getUsers);
    router.get("/user/:id", controllerUsers.getUserById);
    router.get("/UpdateUser",controllerUsers.UpdateUserById);

    router.get("/userByRoundId/:id_round", controllerRoundPlayer.getRoundByRoundId);
    router.get("/roundByUserId/:id_user", controllerRoundPlayer.getRoundByUserId);
    

    router.post("/authentication", controllerAuthentication.getAuthentication);
    router.post("/register", controllerRegister.setRegister);

    router.get("/rights", controllerRights.getRights);
    router.get("/right/:name", controllerRights.getRightsByName);
    router.post("/rightsByUsers",controllerRightsUsers.getRightsByUsers);
    
    router.get("/rounds",controllerRounds.getRounds);
    router.post("/round/add",controllerRounds.setRound);
    router.post("/round/update",controllerRounds.updateRound);
    router.delete("/round/deleteRound", controllerRounds.deleteRound);
    router.post("/roundplayer/register", controllerRoundPlayer.registerRound);
    router.delete("/roundplayer/unRegister", controllerRoundPlayer.unRegisterRound);

    router.post("/championship/add", controllerChampionShip.setChampiongShip);
    router.post("/championship/update", controllerChampionShip.updatChampiongShip);
    router.get("/championships", controllerChampionShip.getChampiongShips);
    // router.post("/championship/round/add", controllerChampionShip.registerRound);
    // router.post("/championship/round/delete", controllerChampionShip.registerRound);
    app.use(router);
};

module.exports = routes;