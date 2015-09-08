var http = require("http");
var port = 3000;
http.createServer(function(req, res){
  var body = "Gracias por llamar";
  var cont_len = body.length;
  res.writeHead(200,{'Content-Lenght' : cont_len,
  'Content-Type': 'text/plain'});
  res.end(body + ":" + cont_len);
}).listen(port, "localhost");
console.log('Node runing ' + port );
