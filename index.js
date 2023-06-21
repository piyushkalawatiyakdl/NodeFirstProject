const http=require('http');

const routesNew=require("./routes")
let msgs;
const server=http.createServer(routesNew)
server.listen(4000);