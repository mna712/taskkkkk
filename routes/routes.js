const express = require('express');
const router = express.Router();
const { getQuestions, postQuestion, getQuestionById, addAnswer} = require('../controllers/questionAndA_C');

router.get("/quest",getQuestions);
router.post("/quest",postQuestion);
router.get("/quest/:id",getQuestionById);
router.post("/answer/:id",postAnswer);

module.exports = router;
