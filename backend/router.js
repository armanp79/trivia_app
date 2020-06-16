const express = require('express');
const router = express.Router();
const Question = require('./models/questions');

router.get('/api/getQuestion', (req, res, next) => {
  
  Question.find({}, (err, data) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).json({
        success: true,
        data: data
      });
    }
  })
})


module.exports = router;