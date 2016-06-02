import { createServer } from 'http';
import { notFound, show, badRequest, add, items } from './utils/httpUtil';
import { showUpload, upload } from './modules/uploadModule/upload';

createServer((req, res)=>{
  if('/' ==req.url){
    switch(req.method){
        case 'GET':
          // show(res);
          showUpload(req, res);
        break;

        case 'POST':
          // add(req, res);
          upload(req, res);
        break;

        default:
          badRequest(res);
    }
  } else{
    notFound(res);
  }
}).listen(3000, '127.0.0.1');
console.log("MainTodoApp");
