// External Dependancies
const mongoose = require('mongoose')

const listeningMultipleChoiceMultipleAnswerSchema = new mongoose.Schema({
  id: String,
  description: String,
  options:[String],
  answers:[Boolean]
})

module.exports = mongoose.model('ListeningMultipleChoiceMultipleAnswer', listeningMultipleChoiceMultipleAnswerSchema)