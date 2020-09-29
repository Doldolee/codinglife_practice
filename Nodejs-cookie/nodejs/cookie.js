var http = require('http');
var cookie = require('cookie');
http.createServer(function(req, res){
    console.log(req.headers.cookie);
    var cookies = {}
    if (req.headers.cookie !== undefined){
        var cookies = cookie.parse(req.headers.cookie);
    }
    console.log(cookies);
    res.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 
        'tasty_cookie=strawberry', 
        `permanent=cookies; Max-Age=${60*60*24*30}`, 
        `secure1=secure2 ; Secure`, 
        `httponly=httponly; HttpOnly`, 
        `path=path; Path=/cookie`, 
        `domain=domain; Domain=02.org`]
    });
    res.end('cookie!')
}).listen(8000);