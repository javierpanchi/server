// External Dependancies
const mongoose = require('mongoose')

const readaloudSchema = new mongoose.Schema({
  id: String,
  description: String
})

module.exports = mongoose.model('Readaloud', readaloudSchema)