const express = require('express');
const cors = require('cors');
const router = require('./router');
const Question = require('./models/questions');

const app = express();

//cors
app.use(cors());


app.use(router);


app.listen(8080, () => console.log(`Example app listening on port port!`));