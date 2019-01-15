// Import our Controllers
const carController = require('../controllers/carController')
const dictationController = require('../controllers/listening/dictationController')
const fillintheblanksController = require('../controllers/listening/fillintheblanksController')
const highlightcorrectsummaryController = require('../controllers/listening/highlightcorrectsummaryController')
const highlightincorrectwordsController = require('../controllers/listening/highlightincorrectwordsController')
const listeningMultipleChoiceMultipleAnswerController = require('../controllers/listening/listeningMultipleChoiceMultipleAnswerController')
const listeningsummaryController = require('../controllers/listening/listeningsummaryController')
const multiplechoicesingleanswerController = require('../controllers/listening/multiplechoicesingleanswerController')
const selectmissingwordController = require('../controllers/listening/selectmissingwordController')
const summarisespokentextController = require('../controllers/listening/summarisespokentextController')
const draganddropController = require('../controllers/reading/draganddropController')
const readingReorderController = require('../controllers/reading/readingReorderController')
const readingfillintheblanksController = require('../controllers/reading/readingfillintheblanksController')
const readingmultiplechoicemultipleanswerController = require('../controllers/reading/readingmultiplechoicemultipleanswerController')
const readingmultiplechoicesingleanswerController = require('../controllers/reading/readingmultiplechoicesingleanswerController')
const answershortquestionController = require('../controllers/speaking/answershortquestionController')
const repeatController = require('../controllers/speaking/repeatController')
const describeimageController = require('../controllers/speaking/describeimageController')
const retelllectureController = require('../controllers/speaking/retelllectureController')
const readaloudController = require('../controllers/speaking/readaloudController')
const summaryController = require('../controllers/writing/summaryController')
const writingController = require('../controllers/writing/writingController')

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    schema: carController.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar
  },
  
  /*reordering*/
  {
    "method": "GET",
    "url": "/reading/reordering",
    "handler": readingReorderingController.getObj
  },
  {
    "method": "GET",
    "url": "/reading/reordering/:id",
    "handler": readingReorderingController.getSingleObj
  },
  
  {
    "method": "POST",
    "url": "/reading/reordering",
    "handler": readingReorderingController.addObj
  },
  {
    "method": "PUT",
    "url": "/reading/reordering/:id",
    "handler": readingReorderingController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/reordering/:id",
    "handler": readingReorderingController.deleteObj
  },
  
  
  /*Listening Multiple Choice multiple answer*/
  
  {
    "method": "GET",
    "url": "/listening/mcma",
    "handler": listeningMultipleChoiceMultipleAnswerController.getObj
  },
  {
    "method": "GET",
    "url": "/listening/mcma/:id",
    "handler": listeningMultipleChoiceMultipleAnswerController.getSingleObj
  },
  
  {
    "method": "POST",
    "url": "/listening/mcma",
    "handler": listeningMultipleChoiceMultipleAnswerController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/listening/mcma/:id",
    "handler": listeningMultipleChoiceMultipleAnswerController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/mcma/:id",
    "handler": listeningMultipleChoiceMultipleAnswerController.deleteObj
  },
  
  /*Dictation*/
  {
    "method": "GET",
    "url": "/listening/dictations",
    "handler": dictationController.getObjs
  },
  {
    "method": "GET",
    "url": "/listening/dictation",
    "handler": dictationController.getObj
  },
  {
    "method": "GET",
    "url": "/listening/dictation/:id",
    "handler": dictationController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/dictation",
    "handler": dictationController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/listening/dictation/:id",
    "handler": dictationController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/dictation/:id",
    "handler": dictationController.deleteObj
  },
  
  
  /*Reordering*/
  
  {
    "method": "GET",
    "url": "/reorder/:reorderId",
    "handler": readingReorderController.getObj
  },
  {
    "method": "GET",
    "url": "/reading/reorder",
    "handler": readingReorderController.getObj
  },
  {
    "method": "POST",
    "url": "/reorder/:reorderId",
    "handler": readingReorderController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/reading/reorder",
    "handler": readingReorderController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/reorder",
    "handler": readingReorderController.deleteObj
  },
  
  /*Writing*/
  
  {
    "method": "GET",
    "url": "/writing/essay",
    "handler": writingController.getObj
  },
  {
    "method": "GET",
    "url": "/writing/essay/:id",
    "handler": writingController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/writing/essay",
    "handler": writingController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/writing/essay/:id",
    "handler": writingController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/writing/essay/:id",
    "handler": writingController.deleteObj
  },
  
  /*Summary*/
  {
    "method": "GET",
    "url": "/writing/summary",
    "handler": summaryController.getObj
  },
  {
    "method": "GET",
    "url": "/writing/summary/:id",
    "handler": summaryController.getSingleObj
  },
  
  {
    "method": "POST",
    "url": "/writing/summary",
    "handler": summaryController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/writing/summary/:id",
    "handler": summaryController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/writing/summary/:id",
    "handler": summaryController.deleteObj
  },
  
  /*Read Aloud*/
  {
    "method": "GET",
    "url": "/speaking/readaloud",
    "handler": readaloudController.getObj
  },
  {
    "method": "GET",
    "url": "/speaking/readaloud/:id",
    "handler": readaloudController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/readaloud",
    "handler": readaloudController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/speaking/readaloud/:id",
    "handler": readaloudController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/readaloud/:id",
    "handler": readaloudController.deleteObj
  },
  
  
  //Reading fill in the blanks
  
  {
    "method": "GET",
    "url": "/reading/readingfillintheblanks",
    "handler": readingfillintheblanksController.getObj
  },
  {
    "method": "GET",
    "url": "/reading/readingfillintheblanks/:id",
    "handler": readingfillintheblanksController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/reading/readingfillintheblanks",
    "handler": readingfillintheblanksController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/reading/readingfillintheblanks/:id",
    "handler": readingfillintheblanksController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/readingfillintheblanks/:id",
    "handler": readingfillintheblanksController.deleteObj
  },
  
  
  //Drag and Drop
  {
    "method": "GET",
    "url": "/reading/draganddrop",
    "handler": draganddropController.getObj
  },
  {
    "method": "GET",
    "url": "/reading/draganddrop/:id",
    "handler": draganddropController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/reading/draganddrop",
    "handler": draganddropController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/reading/draganddrop/:id",
    "handler": draganddropController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/draganddrop/:id",
    "handler": draganddropController.deleteObj
  },
  
  // readingmultiplechoicesingleanswer
  {
    "method": "GET",
    "url": "/reading/readingmultiplechoicesingleanswer",
    "handler": readingmultiplechoicesingleanswerController.getObj
  },
  {
    "method": "GET",
    "url": "/reading/readingmultiplechoicesingleanswer/:id",
    "handler": readingmultiplechoicesingleanswerController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/reading/readingmultiplechoicesingleanswer",
    "handler": readingmultiplechoicesingleanswerController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/reading/readingmultiplechoicesingleanswer/:id",
    "handler": readingmultiplechoicesingleanswerController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/readingmultiplechoicesingleanswer/:id",
    "handler": readingmultiplechoicesingleanswerController.deleteObj
  },
  
  //readingmultiplechoicemultipleanswer
  {
    "method": "GET",
    "url": "/reading/readingmultiplechoicemultipleanswer",
    "handler": readingmultiplechoicemultipleanswerController.getObj
  },
  {
    "method": "GET",
    "url": "/reading/readingmultiplechoicemultipleanswer/:id",
    "handler": readingmultiplechoicemultipleanswerController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/reading/readingmultiplechoicemultipleanswer",
    "handler": readingmultiplechoicemultipleanswerController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/reading/readingmultiplechoicemultipleanswer/:id",
    "handler": readingmultiplechoicemultipleanswerController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/readingmultiplechoicemultipleanswer/:id",
    "handler": readingmultiplechoicemultipleanswerController.deleteObj
  },
  
  
  //Summarize Spoken Text
  
  {
    "method": "GET",
    "url": "/listening/summarisespokentexts",
    "handler": summarisespokentextController.getObjs
  },
  {
    "method": "GET",
    "url": "/listening/summarisespokentext",
    "handler": summarisespokentextController.getObj
  },
  {
    "method": "GET",
    "url": "/listening/summarisespokentext/:id",
    "handler": summarisespokentextController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/summarisespokentext",
    "handler": summarisespokentextController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/listening/summarisespokentext/:id",
    "handler": summarisespokentextController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/summarisespokentext/:id",
    "handler": summarisespokentextController.deleteObj
  },
  
  //Fill in the blanks
  
  {
    "method": "GET",
    "url": "/listening/fillintheblanks",
    "handler": fillintheblanksController.getObjs
  },
  {
    "method": "GET",
    "url": "/listening/fillintheblank",
    "handler": fillintheblanksController.getObj
  },
  {
    "method": "GET",
    "url": "/listening/fillintheblank/:id",
    "handler": fillintheblanksController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/fillintheblank",
    "handler": fillintheblanksController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/listening/fillintheblank/:id",
    "handler": fillintheblanksController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/fillintheblank/:id",
    "handler": fillintheblanksController.deleteObj
  },
  
  
  //highlightcorrectsummary
  {
    "method": "GET",
    "url": "/listening/highlightcorrectsummary",
    "handler": highlightcorrectsummaryController.getObj
  },
  {
    "method": "GET",
    "url": "/listening/highlightcorrectsummary/:id",
    "handler": highlightcorrectsummaryController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/highlightcorrectsummary",
    "handler": highlightcorrectsummaryController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/listening/highlightcorrectsummary/:id",
    "handler": highlightcorrectsummaryController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/highlightcorrectsummary/:id",
    "handler": highlightcorrectsummaryController.deleteObj
  },
  
  
  
  //multiplechoicesingleanswer
  {
    "method": "GET",
    "url": "/listening/multiplechoicesingleanswer",
    "handler": multiplechoicesingleanswerController.getObj
  },
  {
    "method": "GET",
    "url": "/listening/multiplechoicesingleanswer/:id",
    "handler": multiplechoicesingleanswerController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/multiplechoicesingleanswer",
    "handler": multiplechoicesingleanswerController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/listening/multiplechoicesingleanswer/:id",
    "handler": multiplechoicesingleanswerController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/multiplechoicesingleanswer/:id",
    "handler": multiplechoicesingleanswerController.deleteObj
  },
  
  
  {
    "method": "GET",
    "url": "/listening/selectmissingwords",
    "handler": selectmissingwordController.getObjs
  },
  {
    "method": "GET",
    "url": "/listening/selectmissingword",
    "handler": selectmissingwordController.getObj
  },
  {
    "method": "GET",
    "url": "/listening/selectmissingword/:id",
    "handler": selectmissingwordController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/selectmissingword",
    "handler": selectmissingwordController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/listening/selectmissingword/:id",
    "handler": selectmissingwordController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/selectmissingword/:id",
    "handler": selectmissingwordController.deleteObj
  },
  
  //HIW
  
  {
    "method": "GET",
    "url": "/listening/highlightincorrectwords",
    "handler": highlightincorrectwordsController.getObjs
  },
  {
    "method": "GET",
    "url": "/listening/highlightincorrectword",
    "handler": highlightincorrectwordsController.getObj
  },
  {
    "method": "GET",
    "url": "/listening/highlightincorrectword/:id",
    "handler": highlightincorrectwordsController.getSingleObj
  },
  
  {
    "method": "POST",
    "url": "/listening/highlightincorrectword",
    "handler": highlightincorrectwordsController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/listening/highlightincorrectword/:id",
    "handler": highlightincorrectwordsController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/highlightincorrectword/:id",
    "handler": highlightincorrectwordsController.deleteObj
  },
  
  //Repeat Sentences
  {
    "method": "GET",
    "url": "/speaking/repeatsentences",
    "handler": repeatController.getObjs
  },
  {
    "method": "GET",
    "url": "/speaking/repeatsentence",
    "handler": repeatController.getObj
  },
  {
    "method": "GET",
    "url": "/speaking/repeatsentence/:id",
    "handler": repeatController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/repeatsentence",
    "handler": repeatController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/speaking/repeatsentence/:id",
    "handler": repeatController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/repeatsentence/:id",
    "handler": repeatController.deleteObj
  },
  
  //Describe Images
  {
    "method": "GET",
    "url": "/speaking/describeimages",
    "handler": describeimageController.getObjs
  },
  {
    "method": "GET",
    "url": "/speaking/describeimage",
    "handler": describeimageController.getObj
  },
  {
    "method": "GET",
    "url": "/speaking/describeimage/:id",
    "handler": describeimageController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/describeimage",
    "handler": describeimageController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/speaking/describeimage/:id",
    "handler": describeimageController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/describeimage/:id",
    "handler": describeimageController.deleteObj
  },
  
  
  //Retell Lecture
  {
    "method": "GET",
    "url": "/speaking/retelllectures",
    "handler": retelllectureController.getObjs
  },
  {
    "method": "GET",
    "url": "/speaking/retelllecture",
    "handler": retelllectureController.getObj
  },
  {
    "method": "GET",
    "url": "/speaking/retelllecture/:id",
    "handler": retelllectureController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/retelllecture",
    "handler": retelllectureController.addObj
  },
  {
    "method": "UPDATE",
    "url": "/speaking/retelllecture/:id",
    "handler": retelllectureController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/retelllecture/:id",
    "handler": retelllectureController.deleteObj
  },
  
  //ASQ
  {
    "method": "GET",
    "url": "/speaking/answershortquestions",
    "handler": answershortquestionController.getObjs
  },
  {
    "method": "GET",
    "url": "/speaking/answershortquestion",
    "handler": answershortquestionController.getObj
  },
  {
    "method": "GET",
    "url": "/speaking/answershortquestion/:id",
    "handler": answershortquestionController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/answershortquestions",
    "handler": answershortquestionController.addObjs
  },
  {
    "method": "UPDATE",
    "url": "/speaking/answershortquestion",
    "handler": answershortquestionController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/answershortquestion/:id",
    "handler": answershortquestionController.deleteObj
  },
  
  {
    "method": "GET",
    "url": "/listening/count/:skill",
    "handler": xxxController.getObj
  },
  {
    "method": "GET",
    "handler": xxxController.getObj
  }
  
  
  
]

module.exports = routes