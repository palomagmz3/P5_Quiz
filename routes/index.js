


var express = require('express');
var router = express.Router();
const model = require("../models/index");
const quizController = require("../controllers/quiz_controller");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Servidor Paloma' });
});

/* GET credits page. */
router.get('/credits', function(req, res, next) {
	res.render('credits', { title: 'Credits' });
});

/* GET quizzes page. */

router.get('/quizzes', quizController.getQuiz);

module.exports = router;
