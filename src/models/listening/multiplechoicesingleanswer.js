// External Dependancies
const mongoose = require('mongoose')

const multiplechoicesingleanswerSchema = new mongoose.Schema({
  id: String,
  description: String,
  options:[String],
  answer:Number
})

module.exports = mongoose.model('Multiplechoicesingleanswer', multiplechoicesingleanswerSchema)