const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect('mongodb://localhost:27017/to-do-app').then(() => {
    console.log('connected to MongoDb');
});

const app = express();
const indexRouter = require('./routes');
const PORT = 8700;



app.use(express.json());
app.use('/',indexRouter);

app.listen(PORT, () => {
    console.log('server running on port ',PORT);
});    
