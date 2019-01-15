// External Dependancies
const mongoose = require('mongoose')

const  fillintheblanksSchema = new mongoose.Schema({
  id: String,
  name: String,
  text:String
})

module.exports = mongoose.model('Fillintheblanks',  fillintheblanksSchema)