// External Dependancies
const mongoose = require('mongoose')

const readingfillintheblanksSchema = new mongoose.Schema({
  id: String,
  text: [String],
  options:[[String]],
  answers:[String]
})

module.exports = mongoose.model('Readingfillintheblanks', readingfillintheblanksSchema)