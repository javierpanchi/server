// External Dependancies
const mongoose = require('mongoose')

const writingSchema = new mongoose.Schema({
  id: String,
  description: String,
  text:String
})

module.exports = mongoose.model('Writing', writingSchema)