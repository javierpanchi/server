// External Dependancies
const mongoose = require('mongoose')

const contentsSchema = new Schema({ id: String,
content:String,
answerOrder: Number,
effectAllowed: String,
disable:Boolean,
handle:Boolean,

});

const readingReorderSchema = new mongoose.Schema({
  questions: [[contentsSchema]],
  name: String
})

module.exports = mongoose.model('ReadingReorder', readingReorderSchema)