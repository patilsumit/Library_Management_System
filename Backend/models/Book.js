const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const BookSchema = new Schema({
  book_name: {
    type: String
  },
  book_author: {
    type: String
  },
  book_status: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Book = mongoose.model('books', BookSchema)