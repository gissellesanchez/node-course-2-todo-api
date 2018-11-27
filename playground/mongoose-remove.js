const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove()
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });
Todo.findOneAndRemove({_id:'5bfd58222e76aa46609c0c71'}).then((todo)=>{
  console.log(todo);
});

Todo.findOneAndRemove('5bfd58222e76aa46609c0c71').then((todo)=>{
  console.log(todo);
});
