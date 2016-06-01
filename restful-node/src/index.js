import {createServer} from 'http';
var url = require('url');
let items = [];
createServer((req, res)=>{
  console.log(items);
  switch(req.method){
    case 'POST':
      let item = '';
      req.setEncoding('utf8');
      req.on('data', (chunk)=>{
        item += chunk;
        console.log("parsed:" + chunk);
      });
      req.on('end', ()=>{
        items.push(item);
        console.log("done parsing\nOK");
        res.end();
      });
      break;

  case 'GET':
    items.forEach((v, i)=>{
      res.write(i + ')' + v + '\n');
    });
    res.end();
    break;
  }
}).listen(3000, '127.0.0.1');
console.log("Running in http://localhost:3000/");
