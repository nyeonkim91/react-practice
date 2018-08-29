const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8080;

// SETUP MIDDLEWARE
app.use(bodyParser.json());

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static(__dirname + '/../../build'));

// LOAD API FROM ROUTES
// TO BE IMPLEMENTED
const api = require('./routes');
app.use('/api', api);


app.listen(port, () => {
    console.log('Express is listening on port', port);
});
