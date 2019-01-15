// External Dependancies
const mongoose = require('mongoose')

const draganddropSchema = new mongoose.Schema({
  id: String,
  text: String,
  options:[String],
  exists:Boolean
})

module.exports = mongoose.model('Draganddrop', draganddropSchema)