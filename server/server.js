var express = require ('express');
var bodyParser=require('body-parser');
var {ObjectID} =require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user')

var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });


  //res.send(req.params);
  //valid id using isvalid
  //404 -send back empty send

  //findById
    //success
      //if todo -send it back
      //if no todo- send back 404
    //error
      //400 -send empty body back
});

app.delete('/todos/:id',(req,res)=>{
  var id=req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todoß)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send(todo);
  }).catch((e)=>{
    res.status(400).send();
  });


});


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

//
// var newUser = new User({
//   email:'gisel_sp93@hotmail.com'
// });
// newUser.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2))
// },(e)=>{
//   console.log(e);
// })


// var newTodo = new Todo({
//   text:' Edit this video '
// });
//
// newTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log('Unable to save todo')
// });
