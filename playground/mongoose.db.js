//const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');

let id = '59be97ed8e7ffe561a714a98';
let err_id = '59be97ed8e7ffe561a714a98aa';

//if(ObjectID.isValid(id)){
    Todo.find().then((todos)=>{
        console.log('All \n');
        console.log(todos);
        console.log('\n');
    });

    Todo.find({
        _id:id
    }).then((todo)=>{
        console.log('All one id \n');
        console.log(todo);
        console.log('\n');
    });

    Todo.findOne({
        _id:id
    }).then((todo)=>{
        console.log('One row with id \n');
        console.log(todo);
        console.log('\n');
    });

    Todo.findById({
        _id:id
    }).then((todo)=>{
        console.log('Find by id \n');
        console.log(todo);
        console.log('\n');
    }).catch((e)=>{
        console.log(e.name);
    });

// }else{
//     console.log('Id is invalid!');
// }

