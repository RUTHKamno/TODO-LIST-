const Todo = require("../models/todo.model"); 

exports.create = (req, res) => {
    console.log(req.body);
    const todo = {
        name : req.body.name
    };

    Todo.create(todo)
    .then((data) => {
        res.status(200),
        res.send(data);
    })
    .catch((err) => {
        res.status(422).send({
            error: err.message
        })

    });
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Todo.findByPk(id)
    .then(data => {
        if(data) {
            res.send(data);
        }else {
            res.status(404).send({message: `the todo with id ${id} doesn't exist`});
        }

    })
    .catch((err) => {
        res.status(422).send({
            error: err.message
        })
    })
}

exports.findAll = (req, res) => {
    Todo.findAll().then(data => {
        res.send(data);
    }).catch((err)=>{
        res.status(422).send({message: `${err}`});
    })
}
exports.update = (req, res) => {
    const id = req.params.id;
   Todo.findOne({
        where: {id}
    })
    .then( (data) => {
       if(data) {
        data.name= req.body.name
        return data.save();
       }
    })
    .then ((resultat) => {
        res.send({message: "update done well"});
    })
    .catch((err) => {
        res.status(422).send({
            error: err.message
        })
    })
}


exports.delete = (req, res) => {
    const id = req.params.id
    Todo.destroy({
        where: {id}
    })
    .then( num => {
        if(num == 1) {
            res.status(203).send({success : true});
        }else {
            res.status(404).send({message: `the todo with id ${id} doesn't exist`});
        }

    })
    .catch((err) => {
        res.status(422).send({
            error: err.message
        })
    })
}

