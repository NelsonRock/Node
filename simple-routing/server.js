var http = require('http');
var path = require('path');
var pages = require('./pages.js');
http.createServer(function(req, resp){
  // resp.writeHead(200, {'Content-Type' : 'text/html'});
  // resp.end('Nelson!!!');
  /*
  Usando path
  */
  var lookup = path.basename(decodeURI(req.url));
  var count = 0;
  pages.forEach(function(page){
  //  console.log(page.output + " " + page.routes);
    if(page.routes === lookup) {
      console.log(path.join(__dirname, 'pages'));
      resp.writeHead(200, {'Content-Type' : '*'});
      resp.end(typeof page === 'function'
              ? page.output() : page.output);
    }
  });
  if(!resp.finished){
    resp.writeHead(404);
    resp.end('Page not Found');
  }
}).listen(3000);
