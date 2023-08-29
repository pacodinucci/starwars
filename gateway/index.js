const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();



app.use(morgan('dev'));
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173'
};

app.use(cors(corsOptions));

app.use('/characters', createProxyMiddleware({
    target: 'http://characters:8001',
    changeOrigin: true,
}));

app.use('/films', createProxyMiddleware({
    target: 'http://films:8002',
    changeOrigin: true,
}));

app.use('/planets', createProxyMiddleware({
    target: 'http://planets:8003',
    changeOrigin: true,
}));

// app.use('/database', createProxyMiddleware({
//     target: 'http://database:8004',
//     changeOrigin: true,
// }));

app.listen(8000, () => {
    console.log('Gateway on port 8000');
})