import {createServer} from 'http';
import {sumTwo, mult } from '../modules/math/addition';
import _array from 'lodash/array';

console.log("Suma:" + sumTwo(6, 7));
console.log("Mult:" + mult(6, 7));

var number = _array.indexOf([1, 2, 3, 4, 5, 6], 3);
console.log("Encontrado:" + number);


var url = require('url');
let items = [];
createServer((req, res)=>{
  console.log(items);
  const path = url.parse(req.url).pathname; // pathname: '/1'
  console.log("Path:" + path );

  let i = '';
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
    i = parseInt(path.slice(1), 10);
    console.log("Parsed:" + i);

    if(i){
      console.log("Item finded:" + items[i]);
    }
    let body = items.map((v, i)=>{
    return i + ')' + v+ '\n' ;
  }).join('\n');
    res.setHeader('Content-Type', Buffer.byteLength(body));
    res.setHeader('Content-Type', 'text/plain; charset="utf8"');
    res.end(body);
    break;

  case 'PUT':
    i = parseInt(path.slice(1), 10);
    console.log("Parsed PUT:" + i);
    let number = _array.indexOf(items, i);
    console.log("Put method find item:" + items[number] );

    if(isNaN(i)){
      res.statusCode = 400 //item is not valid, not a number
      res.end('Invalid item id');
    } else if(!items[i]){
      res.statusCode = 404;
      res.end('Item not found');
    } else {
      items.push(i); // add item from items array
      res.end('OK\nAdded\n');
    }


  case 'DELETE':
    i = parseInt(path.slice(1), 10); //converting to decimal number
    if(isNaN(i)){
      res.statusCode = 400 //item is not valid, not a number
      res.end('Invalid item id');
    } else if(!items[i]){
      res.statusCode = 404;
      res.end('Item not found');
    } else {
      items.splice(i, 1); // delete item from items array
      res.end('OK\nDelete\n');
    }
  }
}).listen(3000, '127.0.0.1');
console.log("Running in http://localhost:3000/");
