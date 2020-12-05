const { Router } = require('express');
const answerController = require('../controllers/answerController');

function answerRouter(Answer) {
  const router = Router();
  const question = answerController(Answer);

  router.route('/')
    .get(question.getMethod)
    .delete(question.deleteMethod)
    .put(question.putMethod)
    .post(question.postMethod);
  return router;
}

module.exports = answerRouter;
