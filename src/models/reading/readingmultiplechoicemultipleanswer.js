// External Dependancies
const mongoose = require('mongoose')

const readingmultiplechoicemultipleanswerSchema = new mongoose.Schema({
  id: String,
  text: String,
  description:String,
  options:[String],
  answers:[Boolean]
})

module.exports = mongoose.model('Readingmultiplechoicemultipleanswer', readingmultiplechoicemultipleanswerSchema)