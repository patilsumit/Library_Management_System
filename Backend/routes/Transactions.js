const express = require('express')
const users = express.Router()
const cors = require('cors')
var mongojs = require('mongojs')

const Transaction = require('../models/Transaction')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.get('/transaction',(req,res) =>{
  
  Transaction.find()
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

users.post('/assignbook', (req, res) => {
  const today = new Date()
  const userData = {
    username: req.body.username,
    book_details: req.body.book_details,
    dbtrans: req.body.dbtrans,
    created: today,
    
  }

  Transaction.findOne({
    book_details: req.body.book_details
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        Transaction.create(userData)
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




users.delete('/deltrans/:id',(req,res) =>{
    var id=req.params.id;
    Transaction.findByIdAndRemove(id)
    .then((result) => {
        res.send(result); //  Send the result (updated course object) back to user
        console.log("Deleted todo: ", result.username);
    })      
    .catch((err) => {
        res.status(500);
        res.send("Error: Unable to deleted todo\n" + err.message);
        console.log("Error: Unable to create todo\n", err);
    });
})



module.exports = users