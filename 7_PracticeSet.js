const http = require("http")

const server = http.createServer((req, res)=> {
    console.log(req.url, req.method);

        const navbar = `
        <nav style="background:#333; padding:10px; gap:10px ">
        <a href="/" > Home </a>
        <a href="/About" > About </a>
        <a href="/Project" > Project </a>
        <a href="/Form" > Form </a>
        <br><br>
        </nav>
        `

    if(req.url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>home</title></head>')
        res.write(navbar)
        res.write('<body>')
        res.write('<h3>This is Home sec</h3>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }else if(req.url === "/About"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>About</title></head>')
        res.write(navbar)
        res.write('<body>')
        res.write('<h3>This is About sec</h3>')
        res.write('</body>')
        res.write('</html>')
        return res.end();

    }else if(req.url === "/Project"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Project</title></head>')
        res.write(navbar)
        res.write('<body>')
        res.write('<h3>This is Project sec</h3>')
        res.write('</body>')
        res.write('</html>')
        return res.end();

    }else if(req.url === "/Form"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Form</title></head>')
        res.write(navbar)
        res.write('<body>')
        res.write('<h3>This is Form sec</h3>')
        res.write('</body>')
        res.write('</html>')
        return res.end();

    }


})

const PORT = 999;

server.listen(PORT, ()=>{console.log(`your port is :http://localhost:${PORT}`)})