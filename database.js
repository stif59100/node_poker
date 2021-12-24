const express = require('express');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
const initRoutes = require("./routes");
initRoutes(app);

app.listen(8080, () => {
  console.log("Serveur actif");
});
