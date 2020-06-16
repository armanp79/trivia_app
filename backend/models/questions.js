const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/trivia_questions', { useNewUrlParser: true });

var questionSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

module.exports  = mongoose.model('Question', questionSchema);

