const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = 8000;

const app = express();

const indexRouter = require('./routes');

app.listen(PORT, () => {
    console.log('server running on port ',PORT);
});