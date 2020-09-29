var http = require('http')
var fs = require('fs');
var url = require('url');


var app = http.createServer(function(request, response){
    var _url = request.url; //_url은 query data가 들어오는 변수
    var queryData = url.parse(_url, true).query; //queryData 는 url의 querydata를 객체로 반환
    var title = queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
        title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);

    fs.readFile(`data/${queryData.id}`, 'utf8', function(err,data){
        var description = data;
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
            <li><a href="/?id=Javascript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>        
        `;
        // response.end(fs.readFileSync(__dirname+_url)); //사용자에게 전송하는 데이터(프로그래밍 적으로 사용자에게 전송할 데이터를 생성함.)
        response.end(template)
    })

});
app.listen(3000);