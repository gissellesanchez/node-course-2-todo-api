// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to MongoDB Server');

//delete Many
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });



// deletetOne
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });

// db.collection('Users').deleteMany({name:'Gisselle'});

db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5bec97db640a76456561c0b9")
}).then((results)=>{
  console.log(JSON.stringify(results,undefined,2));
});


//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// })

  //db.close();
});
