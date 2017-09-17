let express = require('express');
let bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todos');
const {User} = require('./models/users');

let app = express();

app.use(bodyParser.json());

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
//
// app.get('/todos',(req,res)=>{
//
// });


app.listen(3000,()=>{
   console.log('Server started at port 3000!');
});


