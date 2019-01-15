// External Dependancies
const mongoose = require('mongoose')

const retelllectureSchema = new mongoose.Schema({
  id: String,
  name: String
})

module.exports = mongoose.model('Retelllecture', retelllectureSchema)