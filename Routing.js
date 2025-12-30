//How to Rout


const http = require("http")  //server create
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if(req.url == '/'){

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LearnNode | Home</title></head>');
    res.write('<body><h2>Hey This is the HOME Page</h2></body>');
    res.write('</html>');
    res.end();
    return;

    }else if(req.url === '/About'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LearnNode | About</title></head>');
    res.write('<body><h2>This is the About Page</h2></body>');
    res.write('</html>');
    res.end();
    return;
    }else if(req.url === '/Project'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LearnNode | Project</title></head>');
    res.write('<body><h2>This is the Project Page</h2></body>');
    res.write('</html>');
    return res.end();
    }else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LearnNode</title></head>');
    res.write('<body><h2>This is AK Giri</h2></body>');
    res.write('</html>');
    return res.end();
    }
})



// process.exit();   //stop the server
const PORT = 10;


server.listen(PORT , ()=>{console.log(`Server running at http://localhost:${PORT}`)})