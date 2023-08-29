const server = require('./src/server');
const cors = require('cors');

server.use(cors());

const PORT = 8001;

server.listen(PORT, ()=>{
    console.log(`Characters service listening on port ${PORT}`);
})