// External Dependancies
const mongoose = require('mongoose')

const answershortquestionSchema = new mongoose.Schema({
  id: String,
  name: String
})

module.exports = mongoose.model('Answershortquestion', answershortquestionSchema)