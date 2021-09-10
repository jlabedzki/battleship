const express = require('express');
const app = express()


app.get('/replays', function (req, res) {
  res.send('replay page!');
})

app.listen(3000)