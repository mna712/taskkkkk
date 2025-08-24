
// controllers/qaController.js
const {Question,Answer} = require("../models/schema_model.js");

 async function askQuestion(req, res) {
  try {
    const q = await Question.create(req.body);
    res.json(q);
  } catch (e) {
    res.status(500).json({ error: " error" });
  }
}
 async function detailsQuestion(req,res){
    try {
        const q = await Question.findById(req.params.id);
        if (!q) {
        return res.status(404).json({ error: "Question not found" });
        }
        res.json(q);
    } catch (e) {
        res.status(500).json({ error: " error" });
    }
}
 async function getQuestions(req, res) {
  try {
    const qs = await Question.find();
    res.json(qs);
  } catch (e) {
    res.status(500).json({ error: " error" });
  }
}
 async function addAnswer(req,res){
    try {
        const { question } = req.body;
        const q = await Question.findById({_id:question});
        if (!q) {
            return res.status(404).json({ error: "Question not found" });
        }
        const A = await Answer.create(req.body);
        await A.save();
        res.json(A);
    } catch (e) {
        res.status(500).json({ error: " error" });
    }
}
module.exports = {
  getQuestions,
  askQuestion,
  detailsQuestion,
  addAnswer
};
