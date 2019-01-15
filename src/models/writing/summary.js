// External Dependancies
const mongoose = require('mongoose')

const summarySchema = new mongoose.Schema({
  id: String,
  description: String,
  text: String
})

module.exports = mongoose.model('Summary', summarySchema)