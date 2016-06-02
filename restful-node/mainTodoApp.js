import { createServer } from 'http';
import { notFound, show, badRequest, add, items } from './utils/httpUtil';
createServer((req, res)=>{
  if('/' ==req.url){
    switch(req.method){
        case 'GET':
          show(res);
        break;

        case 'POST':
          add(req, res);
        break;

        default:
          badRequest(res);
    }
  } else{
    notFound(res);
  }
}).listen(3000, '127.0.0.1');
console.log("MainTodoApp");
