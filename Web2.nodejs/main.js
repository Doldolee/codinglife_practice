var http = require('http')
var fs = require('fs');
var url = require('url');


var app = http.createServer(function(request, response){
    var _url = request.url; //_url은 query data가 들어오는 변수
    var queryData = url.parse(_url, true).query; //queryData 는 url의 querydata를 객체로 반환
    var pathname = url.parse(_url, true).pathname;
    
    
    if (pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('data', function(error, filelist){
          var title = 'welcome';
          var description = 'Hello, Node.js';
          var list = '<ul>'
          var i =0;
          while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
            i++;
          }
          list = list + `</ul>`
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>        
          `;
          // response.end(fs.readFileSync(__dirname+_url)); //사용자에게 전송하는 데이터(프로그래밍 적으로 사용자에게 전송할 데이터를 생성함.)
          response.writeHead(200);
          response.end(template);
        })  
      }else {
        fs.readdir('data', function(error, filelist){
          var list = '<ul>'
          var i =0;
          while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
            i++;
          }
          list = list + `</ul>`
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err,data){
          var title = queryData.id;
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
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>        
          `;
          // response.end(fs.readFileSync(__dirname+_url)); //사용자에게 전송하는 데이터(프로그래밍 적으로 사용자에게 전송할 데이터를 생성함.)
          response.writeHead(200);
          response.end(template);
      }); 
    });
    };
    }else {
      response.writeHead(404);
      response.end('Not found');
    }
    
});
app.listen(3000);