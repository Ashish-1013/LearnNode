// 6.Redirecting when click submit


const http = require("http")  //server create
const fs = require("fs")      // fs module use for file ride





const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if(req.url == '/'){

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LearnNode | Home</title></head>');
    res.write('<body><h2>Hey This is the HOME Page</h2></body>');
    res.write('</html>');
    res.end();      //We need to end this response
    return;               //after ending the process we need return and start new proces if we don't return then the server will be get killed

    }else if(req.url === '/About'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LearnNode | About</title></head>');
    res.write('<body><h2>This is the About Page</h2></body>');
    res.write('</html>');
    res.end();
    return;

    //Form

    }else if(req.url === '/Form'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LearnNode | Form</title></head>');

    res.write('<body>');

    res.write('<form action="/submit" method="POST">');

    // Name
    res.write('<label>Name: <input type="text" name="username" placeholder="Write your Name" required></label><br><br>');

    // Gender as radio buttons
    res.write('<label>Gender:</label><br>');
    res.write('<input type="radio" name="gender" value="Male" required> Male<br>');
    res.write('<input type="radio" name="gender" value="Female"> Female<br>');
    res.write('<input type="radio" name="gender" value="Other"> Other<br><br>');
    // Date of Birth
    res.write('<label>Date of Birth: <input type="date" name="dob" required></label><br><br>');
    // Phone
    res.write('<label>Phone Number: <input type="tel" name="phone" placeholder="1234567890" required></label><br><br>');
    // Email
    res.write('<label>Email: <input type="email" name="email" placeholder="example@mail.com" required></label><br><br>');
    // Address
    res.write('<label>Address:<br><textarea name="address" rows="3" cols="40" placeholder="Enter your address" required></textarea></label><br><br>');
    // Message
    res.write('<label>Message:<br><textarea name="message" rows="5" cols="50" placeholder="Write your message here"></textarea></label><br><br>');
    // Submit button
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }
    
    
    // Redirecting when click submit
    else if(req.url.toLowerCase()  === '/submit' && req.method == "POST"){

        fs.writeFileSync('userInfo.text', 'Ashish Giri')
        res.statusCode= 302;
        res.setHeader('Location', '/')
        return res.end();

    }

    else{
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