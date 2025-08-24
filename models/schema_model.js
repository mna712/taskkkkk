const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
const questionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  subject: { type: String, required: true },
});

const answerSchema = new Schema({
  text: { type: String, required: true },
  questionId: { type: String, required: true },
});


const Question = mongoose.model("Question", questionSchema);
const Answer = mongoose.model("Answer", answerSchema);

module.exports = {
  Question,
  Answer,
}

