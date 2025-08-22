
// controllers/qaController.js
import Question from "../models/Question.js";

export async function askQuestion(req, res) {
  try {
    const q = await Question.create(req.body);
    res.json(q);
  } catch (e) {
    res.status(500).json({ error: " error" });
  }
}
export async function detailsQuestion(req,res){
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
export async function getQuestions(req, res) {
  try {
    const qs = await Question.find();
    res.json(qs);
  } catch (e) {
    res.status(500).json({ error: " error" });
  }
}
export async function addAnswer(req,res){
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
