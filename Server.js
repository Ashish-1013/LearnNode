//creating Server 

const http = require("http")

function requestLisner(req, res){

console.log(req)

}

const server = http.createServer(requestLisner)


server.listen(3000)
