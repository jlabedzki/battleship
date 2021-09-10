const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const PORT = 8080;
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT);