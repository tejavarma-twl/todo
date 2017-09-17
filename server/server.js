let express = require('express');
let bodyParser = require('body-parser');
let {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todos');
const {User} = require('./models/users');

const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Todo App!</h1>");
});

app.post('/todos',(req,res)=>{
    console.log(req.body);
    let todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(error)=>{
        res.status(400).send(error);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res)=>{
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send("Not found!");
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send("Not Found!");
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send("Invalid id!");
    });
});


app.listen(port,()=>{
   console.log(`Server started at port! ${port}`);
});

module.exports = {app};
