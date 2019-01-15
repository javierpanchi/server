// External Dependancies
const mongoose = require('mongoose')

const highlightincorrectwordsSchema = new mongoose.Schema({
  id: String,
  name: String,
  text:String,
  answers:[String]
  
})

module.exports = mongoose.model('Highlightincorrectwords', highlightincorrectwordsSchema)