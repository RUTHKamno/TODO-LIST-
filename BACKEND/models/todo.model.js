const db = require("../models/index");

    const Todo = db.sequelize.define("todo", {
        name : {
            type: db.Sequelize.STRING,
        },

    });

module.exports = Todo;