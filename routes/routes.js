const express = require('express');
const router = express.Router();
const { getQuestions, askQuestion, detailsQuestion, addAnswer} = require('../controllers/questionAndA_C');

router.get("/quest",getQuestions);
router.post("/quest",askQuestion);
router.get("/quest/:id",detailsQuestion);
router.post("/answer/:id",addAnswer);

module.exports = router;
