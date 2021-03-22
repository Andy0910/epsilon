var path = require('path');
var express = require('express');

var app = express();

var folder = path.join(__dirname, '/public');

app.use(express.static(folder));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
