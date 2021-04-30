var path = require('path');
var express = require('express');

var app = express();

var folder = path.join(__dirname, '/public');

app.use(express.static(folder));

app.listen(80, () => {
  console.log('Listening on port 80');
});
