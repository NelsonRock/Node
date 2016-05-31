import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type' : 'image/jpg'});
  fs.createReadStream('./image.jpg').pipe(res);

}).listen(3000);
console.log("Server listen on http://127.0.0.1:3000/");
