

const Sequelize = require('sequelize');
const {models} = require('../models/index');

exports.getQuiz = (req, res, next) =>{
	models.quiz.findAll()
	.then(quizzes => {
		res.render("quizzes", {quizzes})
	})
	.catch(error => next(error));
};