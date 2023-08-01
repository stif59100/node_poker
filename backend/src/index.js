const express = require('express');
var cors = require('cors')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors())
const initRoutes = require("./routes");
initRoutes(app);

app.listen(4500, () => {
  console.log("Serveur actif");
});
