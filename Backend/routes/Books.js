const express = require('express')
const users = express.Router()
const cors = require('cors')
var mongojs = require('mongojs')

const Book = require('../models/Book')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.get('/',(req,res) =>{
  
   Book.find()
   .then((result) => {
    res.send(result);
})
.catch((err) => {
    res.status(500);
    res.send("Error: Unable to get todo\n" + err.message);
    console.log("Error: Unable to get todo\n", err);
})

})

users.get('/:id',(req,res) =>{
   var id=req.params.id;
    Book.findById(id)
    .then((result) => {
     res.send(result);
 })
 .catch((err) => {
     res.status(500);
     res.send("Error: Unable to get todo\n" + err.message);
     console.log("Error: Unable to get todo\n", err);
 })
 
 })

users.post('/addbooking', (req, res) => {
  const today = new Date()
  const userData = {
    book_name: req.body.book_name,
    book_author: req.body.book_author,
    book_status: req.body.book_status,
    created: today
  }

  Book.findOne({
    book_name: req.body.book_name
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        Book.create(userData)
          .then(user => {
              res.send(user);
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.put('/:id',(req,res) =>{
    var id=req.params.id;
  
  Book.findById(id)
  .then((result) => {
    
    var todo = req.body
  var updTask = {}

  if (todo.book_name && todo.book_author && todo.book_status) {
    updTask.book_name = todo.book_name
    updTask.book_author = todo.book_author
    updTask.book_status = todo.book_status
  }

  if (!updTask) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
    
  } else {
    Book.update(
      { _id: mongojs.ObjectId(id) },
      updTask,
      {},
      function(err, task) {
        if (err) {
          res.send(err)
        }
        res.json(task)
      }
    )
  }
      
})
.catch((err) => {
   res.status(500);
   res.send("Error: Unable to get todo\n" + err.message);
   console.log("Error: Unable to get todo\n", err);
 })

})




users.delete('/:id',(req,res) =>{
    var id=req.params.id;
    Book.findByIdAndRemove(id)
    .then((result) => {
        res.send(result); //  Send the result (updated course object) back to user
        console.log("Deleted todo: ", result.book_name);
    })      
    .catch((err) => {
        res.status(500);
        res.send("Error: Unable to deleted todo\n" + err.message);
        console.log("Error: Unable to create todo\n", err);
    });
})



module.exports = users