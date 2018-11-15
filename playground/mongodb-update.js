// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5bec9ae5d0804047644c33ba')
  },{
    $set:{
      name:'Gisselle'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5beca59bd6acfa035b9d16a8')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });



});
