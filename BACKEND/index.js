const express = require("express");
const cors = require("cors");
const db = require("./models");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json()) // demander au serveur node.js de travailler avec le format json

app.use(express.urlencoded({extended: true})) //supporter le format xww

//**************************************** ON APPELLE LA ROUTE TODO****************************************/

const todoRoutes = require("./routes/todo.routes")(app);

//******** ICI ON CONFIGURE NOTRE SERVEUR POUR QU'IL ASSURE LA GESTION DE L'AFFICHAGE DE NOS TODO ET POUR QU'IL COMMUNIQUE AVEC LE BACKEND*********** */

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to our Todo Backend"
    })
})

//***************** ICI, ON SE CONNECTE AVEC LE PAQUET SEQUELIZE AFIN DE GERER NOS REQUETES SQL************************/
/**
 * Sequelize est un ORM qui permet de gérer les paquets,
 * sequelize est une instance du module Sequelize
 * on l'utilise comme une fonction synchrone car il faut qu'il charge dans la base de données avant que le programme ne continue
 * pour pas que les données enregistrés soient pertubés
 * et comme il retourne une promesse, on se sert de then et catch afin de mieux gérer la reussite et les erreurs
 */
db.sequelize.sync().then(() => {
    console.log("Data base synchronous");
}).catch((err) => {
    console.log("erreur :" + err.message);
})


//**************** ICI, ON CONFIGURE NOTRE SERVEUR SUR LE PORT 8080 **************** */

const PORT = process.env.PORT||8080;

app.listen(PORT, () => {
    console.log (`My todo list app listening at http://localhost: ${PORT}`);
})