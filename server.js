var express = require('express');
var app = express();
var port = 2407;

app.get("/helloworld", (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server listenning on port ' + port);
});