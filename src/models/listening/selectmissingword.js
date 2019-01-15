// External Dependancies
const mongoose = require('mongoose')

const selectmissingwordSchema = new mongoose.Schema({
  id: String,
  name: String,
  answers:[String]
})

module.exports = mongoose.model('Selectmissingword', selectmissingwordSchema)