// External Dependancies
const mongoose = require('mongoose')

const dictationSchema = new mongoose.Schema({
  id: String,
  name: String
})

module.exports = mongoose.model('Dictation', dictationSchema)