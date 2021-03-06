let mongoose = require('mongoose');

let Todo = mongoose.model('Todo',{
    text: {
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        default:false,
        type:Boolean
    },
    completedAt:{
        type:Number,
        default:null
    }
});

module.exports = {Todo};