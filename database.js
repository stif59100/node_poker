const express = require('express');
const app = express();

app.use(express.json());

const initRoutes = require("./routes");
initRoutes(app);

app.listen(8080, () => {
  console.log("Serveur actif");
});
