//How to send response


const http = require("http")  //server create
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LearnNode</title></head>');
    res.write('<body><h2>This is AK Giri</h2></body>');
    res.write('</html>');
    res.end();
})



// process.exit();   //stop the server
const PORT = 10;


server.listen(PORT , ()=>{console.log(`Server running at http://localhost:${PORT}`)})
