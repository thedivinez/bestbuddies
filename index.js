const http = require('http');
const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => console.debug(`Server listening on port ${3000}`));