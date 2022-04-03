const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/styles/styles.css'));
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));