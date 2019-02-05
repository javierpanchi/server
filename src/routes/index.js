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
const utilController = require('../controllers/util/UtilController')

const routes = [

  // {
  //   method: 'GET',
  //   url: '/',
  //   // this function is executed for every request before the handler is executed
  //   beforeHandler: async (request, reply) => {
  //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaac")
  //   },
  //   handler: readingReorderController.getObjs
  // },

  /*reordering*/
  {
    "method": "GET",
    "url": "/reading/reordering",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.getObjs
  },
  {
    "method": "GET",
    "url": "/reading/reordering/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.getSingleObj
  },

  {
    "method": "POST",
    "url": "/reading/reordering",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.addObj
  },
  {
    "method": "PUT",
    "url": "/reading/reordering/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/reordering/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.deleteObj
  },


  /*Listening Multiple Choice multiple answer*/

  {
    "method": "GET",
    "url": "/listening/mcma",
    "beforeHandler": utilController.checkAuthentication,
    "handler": listeningMultipleChoiceMultipleAnswerController.getObjs
  },
  {
    "method": "GET",
    "url": "/listening/mcma/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": listeningMultipleChoiceMultipleAnswerController.getSingleObj
  },

  {
    "method": "POST",
    "url": "/listening/mcma",
    "beforeHandler": utilController.checkAuthentication,
    "handler": listeningMultipleChoiceMultipleAnswerController.addObj
  },
  {
    "method": "PUT",
    "url": "/listening/mcma/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": listeningMultipleChoiceMultipleAnswerController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/mcma/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": listeningMultipleChoiceMultipleAnswerController.deleteObj
  },

  /*Dictation*/
  {
    "method": "GET",
    "url": "/listening/dictations",
    "beforeHandler": utilController.checkAuthentication,
    "handler": dictationController.getObjs
  },
  // {
  //   "method": "GET",
  //   "url": "/listening/dictation",
  //   "beforeHandler": utilController.checkAuthentication,
  //"handler": dictationController.getObj
  // },
  {
    "method": "GET",
    "url": "/listening/dictation/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": dictationController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/dictation",
    "beforeHandler": utilController.checkAuthentication,
    "handler": dictationController.addObj
  },
  {
    "method": "PUT",
    "url": "/listening/dictation/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": dictationController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/dictation/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": dictationController.deleteObj
  },


  /*Reordering*/

  {
    "method": "GET",
    "url": "/reorder/:reorderId",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.getObjs
  },
  {
    "method": "GET",
    "url": "/reading/reorder",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.getObjs
  },
  {
    "method": "POST",
    "url": "/reorder/:reorderId",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.addObj
  },
  {
    "method": "PUT",
    "url": "/reading/reorder",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/reorder",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingReorderController.deleteObj
  },

  /*Writing*/

  {
    "method": "GET",
    "url": "/writing/essay",
    "beforeHandler": utilController.checkAuthentication,
    "handler": writingController.getObjs
  },
  {
    "method": "GET",
    "url": "/writing/essay/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": writingController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/writing/essay",
    "beforeHandler": utilController.checkAuthentication,
    "handler": writingController.addObj
  },
  {
    "method": "PUT",
    "url": "/writing/essay/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": writingController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/writing/essay/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": writingController.deleteObj
  },

  /*Summary*/
  {
    "method": "GET",
    "url": "/writing/summary",
    "beforeHandler": utilController.checkAuthentication,
    "handler": summaryController.getObjs
  },
  {
    "method": "GET",
    "url": "/writing/summary/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": summaryController.getSingleObj
  },

  {
    "method": "POST",
    "url": "/writing/summary",
    "beforeHandler": utilController.checkAuthentication,
    "handler": summaryController.addObj
  },
  {
    "method": "PUT",
    "url": "/writing/summary/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": summaryController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/writing/summary/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": summaryController.deleteObj
  },

  /*Read Aloud*/
  {
    "method": "GET",
    "url": "/speaking/readaloud",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readaloudController.getObjs
  },
  {
    "method": "GET",
    "url": "/speaking/readaloud/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readaloudController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/readaloud",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readaloudController.addObj
  },
  {
    "method": "PUT",
    "url": "/speaking/readaloud/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readaloudController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/readaloud/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readaloudController.deleteObj
  },


  //Reading fill in the blanks

  {
    "method": "GET",
    "url": "/reading/readingfillintheblanks",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingfillintheblanksController.getObjs
  },
  {
    "method": "GET",
    "url": "/reading/readingfillintheblanks/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingfillintheblanksController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/reading/readingfillintheblanks",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingfillintheblanksController.addObj
  },
  {
    "method": "PUT",
    "url": "/reading/readingfillintheblanks/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingfillintheblanksController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/readingfillintheblanks/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingfillintheblanksController.deleteObj
  },


  //Drag and Drop
  {
    "method": "GET",
    "url": "/reading/draganddrop",
    "beforeHandler": utilController.checkAuthentication,
    "handler": draganddropController.getObjs
  },
  {
    "method": "GET",
    "url": "/reading/draganddrop/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": draganddropController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/reading/draganddrop",
    "beforeHandler": utilController.checkAuthentication,
    "handler": draganddropController.addObj
  },
  {
    "method": "PUT",
    "url": "/reading/draganddrop/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": draganddropController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/draganddrop/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": draganddropController.deleteObj
  },

  // readingmultiplechoicesingleanswer
  {
    "method": "GET",
    "url": "/reading/readingmultiplechoicesingleanswer",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicesingleanswerController.getObjs
  },
  {
    "method": "GET",
    "url": "/reading/readingmultiplechoicesingleanswer/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicesingleanswerController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/reading/readingmultiplechoicesingleanswer",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicesingleanswerController.addObj
  },
  {
    "method": "PUT",
    "url": "/reading/readingmultiplechoicesingleanswer/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicesingleanswerController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/readingmultiplechoicesingleanswer/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicesingleanswerController.deleteObj
  },

  //readingmultiplechoicemultipleanswer
  {
    "method": "GET",
    "url": "/reading/readingmultiplechoicemultipleanswer",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicemultipleanswerController.getObjs
  },
  {
    "method": "GET",
    "url": "/reading/readingmultiplechoicemultipleanswer/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicemultipleanswerController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/reading/readingmultiplechoicemultipleanswer",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicemultipleanswerController.addObj
  },
  {
    "method": "PUT",
    "url": "/reading/readingmultiplechoicemultipleanswer/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicemultipleanswerController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/reading/readingmultiplechoicemultipleanswer/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": readingmultiplechoicemultipleanswerController.deleteObj
  },

  //Fill in the blanks

  {
    "method": "GET",
    "url": "/listening/fillintheblanks",
    "beforeHandler": utilController.checkAuthentication,
    "handler": fillintheblanksController.getObjs
  },
  // {
  //   "method": "GET",
  //   "url": "/listening/fillintheblank",
  //   "beforeHandler": utilController.checkAuthentication,
  //"handler": fillintheblanksController.getObj
  // },
  {
    "method": "GET",
    "url": "/listening/fillintheblank/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": fillintheblanksController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/fillintheblank",
    "beforeHandler": utilController.checkAuthentication,
    "handler": fillintheblanksController.addObj
  },
  {
    "method": "PUT",
    "url": "/listening/fillintheblank/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": fillintheblanksController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/fillintheblank/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": fillintheblanksController.deleteObj
  },


  //highlightcorrectsummary
  {
    "method": "GET",
    "url": "/listening/highlightcorrectsummary",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightcorrectsummaryController.getObjs
  },
  {
    "method": "GET",
    "url": "/listening/highlightcorrectsummary/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightcorrectsummaryController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/highlightcorrectsummary",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightcorrectsummaryController.addObj
  },
  {
    "method": "PUT",
    "url": "/listening/highlightcorrectsummary/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightcorrectsummaryController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/highlightcorrectsummary/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightcorrectsummaryController.deleteObj
  },



  //multiplechoicesingleanswer
  {
    "method": "GET",
    "url": "/listening/multiplechoicesingleanswer",
    "beforeHandler": utilController.checkAuthentication,
    "handler": multiplechoicesingleanswerController.getObjs
  },
  {
    "method": "GET",
    "url": "/listening/multiplechoicesingleanswer/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": multiplechoicesingleanswerController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/multiplechoicesingleanswer",
    "beforeHandler": utilController.checkAuthentication,
    "handler": multiplechoicesingleanswerController.addObj
  },
  {
    "method": "PUT",
    "url": "/listening/multiplechoicesingleanswer/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": multiplechoicesingleanswerController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/multiplechoicesingleanswer/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": multiplechoicesingleanswerController.deleteObj
  },


  {
    "method": "GET",
    "url": "/listening/selectmissingwords",
    "beforeHandler": utilController.checkAuthentication,
    "handler": selectmissingwordController.getObjs
  },
  // {
  //   "method": "GET",
  //   "url": "/listening/selectmissingword",
  //   "beforeHandler": utilController.checkAuthentication,
  //"handler": selectmissingwordController.getObj
  // },
  {
    "method": "GET",
    "url": "/listening/selectmissingword/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": selectmissingwordController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/listening/selectmissingword",
    "beforeHandler": utilController.checkAuthentication,
    "handler": selectmissingwordController.addObj
  },
  {
    "method": "PUT",
    "url": "/listening/selectmissingword/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": selectmissingwordController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/selectmissingword/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": selectmissingwordController.deleteObj
  },

  //HIW

  {
    "method": "GET",
    "url": "/listening/highlightincorrectwords",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightincorrectwordsController.getObjs
  },
  // {
  //   "method": "GET",
  //   "url": "/listening/highlightincorrectword",
  //   "beforeHandler": utilController.checkAuthentication,
  //"handler": highlightincorrectwordsController.getObj
  // },
  {
    "method": "GET",
    "url": "/listening/highlightincorrectword/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightincorrectwordsController.getSingleObj
  },

  {
    "method": "POST",
    "url": "/listening/highlightincorrectword",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightincorrectwordsController.addObj
  },
  {
    "method": "PUT",
    "url": "/listening/highlightincorrectword/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightincorrectwordsController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/listening/highlightincorrectword/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": highlightincorrectwordsController.deleteObj
  },

  //Repeat Sentences
  {
    "method": "GET",
    "url": "/speaking/repeatsentences",
    "beforeHandler": utilController.checkAuthentication,
    "handler": repeatController.getObjs
  },
  // {
  //   "method": "GET",
  //   "url": "/speaking/repeatsentence",
  //   "beforeHandler": utilController.checkAuthentication,
  //"handler": repeatController.getObj
  // },
  {
    "method": "GET",
    "url": "/speaking/repeatsentence/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": repeatController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/repeatsentence",
    "beforeHandler": utilController.checkAuthentication,
    "handler": repeatController.addObj
  },
  {
    "method": "PUT",
    "url": "/speaking/repeatsentence/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": repeatController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/repeatsentence/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": repeatController.deleteObj
  },

  //Describe Images
  {
    "method": "GET",
    "url": "/speaking/describeimages",
    "beforeHandler": utilController.checkAuthentication,
    "handler": describeimageController.getObjs
  },
  {
    "method": "GET",
    "url": "/speaking/describeimage",
    "beforeHandler": utilController.checkAuthentication,
    "handler": describeimageController.getObjs
  },
  {
    "method": "GET",
    "url": "/speaking/describeimage/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": describeimageController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/describeimage",
    "beforeHandler": utilController.checkAuthentication,
    "handler": describeimageController.addObj
  },
  {
    "method": "PUT",
    "url": "/speaking/describeimage/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": describeimageController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/describeimage/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": describeimageController.deleteObj
  },


  //Retell Lecture
  {
    "method": "GET",
    "url": "/speaking/retelllectures",
    "beforeHandler": utilController.checkAuthentication,
    "handler": retelllectureController.getObjs
  },
  // {
  //   "method": "GET",
  //   "url": "/speaking/retelllecture",
  //   "beforeHandler": utilController.checkAuthentication,
  //"handler": retelllectureController.getObj
  // },
  {
    "method": "GET",
    "url": "/speaking/retelllecture/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": retelllectureController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/retelllecture",
    "beforeHandler": utilController.checkAuthentication,
    "handler": retelllectureController.addObj
  },
  {
    "method": "PUT",
    "url": "/speaking/retelllecture/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": retelllectureController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/retelllecture/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": retelllectureController.deleteObj
  },

  //ASQ
  {
    "method": "GET",
    "url": "/speaking/answershortquestions",
    "beforeHandler": utilController.checkAuthentication,
    "handler": answershortquestionController.getObjs
  },
  // {
  //   "method": "GET",
  //   "url": "/speaking/answershortquestion",
  //   "beforeHandler": utilController.checkAuthentication,
  //"handler": answershortquestionController.getObj
  // },
  {
    "method": "GET",
    "url": "/speaking/answershortquestion/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": answershortquestionController.getSingleObj
  },
  {
    "method": "POST",
    "url": "/speaking/answershortquestions",
    "beforeHandler": utilController.checkAuthentication,
    "handler": answershortquestionController.addObj
  },
  {
    "method": "PUT",
    "url": "/speaking/answershortquestion",
    "beforeHandler": utilController.checkAuthentication,
    "handler": answershortquestionController.updateObj
  },
  {
    "method": "DELETE",
    "url": "/speaking/answershortquestion/:id",
    "beforeHandler": utilController.checkAuthentication,
    "handler": answershortquestionController.deleteObj
  },

  // {
  //   "method": "GET",
  //   "url": "/listening/count/:skill",
  //   "beforeHandler": utilController.checkAuthentication,
  //"handler": xxxController.getObj
  // },
  // {
  //   "method": "GET",
  //   "beforeHandler": utilController.checkAuthentication,
  //"handler": xxxController.getObj
  // }



]

module.exports = routes