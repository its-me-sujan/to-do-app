const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const PORT = 8090;
mongoose.connect('mongodb://localhost:27017/to-do-app').then(() => {
    console.log('connected to MongoDb');
});

const indexRouter = require('./routes');

app.use('/',indexRouter);

app.listen(PORT, () => {
    console.log('server running on port ',PORT);
});    
  