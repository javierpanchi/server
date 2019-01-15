// External Dependancies
const mongoose = require('mongoose')

const listeningsummarySchema = new mongoose.Schema({
  id: String,
  name: String
})

module.exports = mongoose.model('Listeningsummary', listeningsummarySchema)