
/**
Stream and Pipe
*/
import { createServer } from 'http';
import { handleError } from './utils/httpUtil';

const root = __dirname;
// console.log(root);
var _parse = require('url').parse;
var _join = require('path').join;
var fs = require('fs');

createServer((req, res)=>{
   let url = _parse(req.url);
   let path = _join(root, url.pathname);
   let stream = fs.createReadStream(path);
   stream.pipe(res);
   stream.on('error', (err)=>{
     let resp = handleError(err);
     res.statusCode = resp[0]
     res.end(resp[1]);
   })
}).listen(3000,'127.0.0.1');
console.log("Running server");
