module.exports = (app)=> { 
    const todoController = require("../controllers/todo.controller");

    router = require("express").Router();

    router.post("/", todoController.create);

    router.get("/", todoController.findAll);

    router.get("/:id", todoController.findOne);

    router.put("/:id", todoController.update);

    router.delete("/:id", todoController.delete);

    app.use("/api/todos", router);
}