import { createServer } from 'http';
import fs from 'fs';

function formatHtml(titles, tmpl, res){
  let html = tmpl.replace('%', titles.join('</li><li>'));
  res.end(html);
}

function hadError(err, res){
  console.log(err);
  res.end('Server error');
}

function getTemplate(titles, res){
  fs.readFile('./index.html', (err, data)=>{
    if (err) {
      hadError(err, res);
    } else {
      formatHtml(titles, data.toString(), res)
    }
  });
}

function getTitles(res){
  fs.readFile('./titles.json', (err, data)=>{
    if (err) {
      hadError(err,res);
    } else {
      getTemplate(JSON.parse(data.toString()), res);
    }
  });
}

createServer((req, res)=>{
    getTitles(res);
    // fs.readFile('./titles.json', (err, data)=>{
    //   if(err) {
    //     console.log('Server Error:' + err);
    //     res.end('Server error');
    //   }
    //   else{
    //     let titles = JSON.parse(data.toString());
    //     console.log('Titles json:\n' + titles);
    //
    //     fs.readFile('./index.html', (err, data)=>{
    //       if (err) {
    //         console.log('err');
    //         res.end('Server error');
    //       }
    //       else{
    //         let tmpl = data.toString();
    //         console.log(tmpl);
    //
    //         let html = tmpl.replace('%', titles.join('</li><li>'));
    //         res.writeHead(200, {'Content-Type' : 'text/html'});
    //         res.end(html);
    //       }
    //     });
    //   }
    // })
}).listen(3000, '127.0.0.1');
console.log('Server running');
