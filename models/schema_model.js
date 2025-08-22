const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
const questionSchema = new Schema({
  questionTitle: { type: String, required: true },
  questionDescription: { type: String, required: true },
  questionSubject: { type: String, required: true },
});

const answerSchema = new Schema({
  answerText: { type: String, required: true },
  questionId: { type: String, required: true },
});

module.exports = {
  questionSchema,
  answerSchema,
};
