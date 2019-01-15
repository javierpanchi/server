// External Dependancies
const mongoose = require('mongoose')

const repeatSchema = new mongoose.Schema({
  id: String,
  name: String
})

module.exports = mongoose.model('Repeat', repeatSchema)