let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let env = 'prod';

if(env==='prod'){
    dburl = 'mongodb://tej:tej@ds141284.mlab.com:41284/todoapp';
}else{
    dburl = 'mongodb://localhost:27017/todoapp';
}

mongoose.connect(dburl,{
    useMongoClient:true
});

module.exports = {mongoose};


