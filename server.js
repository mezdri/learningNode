var http = require("http");

var constructor = function (request, response){
    console.log("hello world");
    response.end("Hello world");
};

var server = http.createServer(constructor);

server.listen(8080);