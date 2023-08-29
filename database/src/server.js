const express = require('express');
const morgan = require('morgan');



const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use(require("./routes"));

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

server.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    });
})

module.exports = server;