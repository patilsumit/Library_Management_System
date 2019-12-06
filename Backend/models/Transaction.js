const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TransactionSchema = new Schema({
    username: {
        type: String
    },
    book_details: {
        type: String
    },
    dbtrans: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = Transaction = mongoose.model('transaction', TransactionSchema)