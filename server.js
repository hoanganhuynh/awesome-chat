import express from "express";
let app = express();
let port = 2407;

app.get("/helloworld", (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server listenning on port ' + port);
});
