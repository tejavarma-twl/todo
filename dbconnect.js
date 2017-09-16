const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Error '+err);
    }
    console.log('Connection successful!');

    db.collection('Todos').insertOne({
        text:'Sometinn to do',
        completed:false
    },(err,res) => {
       if(err){
           return console.log(err);
       }
       console.log(res.ops);
    });

    db.close();
});