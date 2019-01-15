// External Dependancies
const mongoose = require('mongoose')

const highlightcorrectsummarySchema = new mongoose.Schema({
  id: String,
  description: String,
  options:[String],
  answer:Number
})

module.exports = mongoose.model('Highlightcorrectsummary', highlightcorrectsummarySchema)