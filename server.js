const http = require('http');
const app = require('./app');
const server = http.createServer(app);

server.listen(5700,()=>{
    console.log('server is 5700');
})