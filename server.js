var express = require('express');
var path = require('path');

var app = express();
var bodyParser = require('body-parser');
var validate = require('mongoose-validator');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
require('./server/config/routes.js')(app);
app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function() {
  console.log('cool stuff on: 8000');
});
