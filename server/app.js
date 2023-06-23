const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const {errorHandler} = require('./errorHandler');
const app = express();

const options = {
    origin: '*'
}

app.use(cors(options));
app.use(express.json());
app.use('/api/', router);

app.use(errorHandler);

module.exports = app;