// External Dependancies
const mongoose = require('mongoose')

const readingmultiplechoicesingleanswerSchema = new mongoose.Schema({
  id: String,
  text: String,
  description:String,
  options:[String],
  answer:Number
})

module.exports = mongoose.model('Readingmultiplechoicesingleanswer', readingmultiplechoicesingleanswerSchema)