var http = require('http');
var fs = require('fs');
// url이라는 변수로 url모듈을 읽어와서 사용하겠다.
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    // querystring 가져오는 코드
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
        title= 'welcome';
    //   _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);

    fs.readFile(`data/${title}`, 'utf8', function(err, description){
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JAVASCRIPT">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>`;

        response.end(template);
        
    })
   
        
    
    // 사용자가 접속한 url에 따라 dir에 있는 파일을 읽어주는 코드
    // response.end(fs.readFileSync(__dirname + url));
    
    // dir를 읽어서 출력하지 않고 querystring id를 출력
    // response.end(queryData.id);
 
});
// app.listen(3000);