const dbConfig = require("../db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorsAliases : false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// db.menus = require("./menu.model")(sequelize, Sequelize); // on importe le model de menu ici donc en gros après la connexion, on a normalement le model
module.exports = db;