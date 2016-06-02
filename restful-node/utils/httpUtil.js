const items = [];
export function handleError(err){
  let resp = [];
  if('ENOENT' == err.code){
    resp.push(404);
    resp.push('Not found');
    return resp;
  } else{
    resp.push(500);
    resp.push('Internal Error');
    return resp;
  }
}

export function notFound(res){
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

 export function badRequest(res){
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bad request');
}

export function show(res) {
  console.log("Items:"  + items.length);
  var html = '<html><head><title>Todo List</title></head><body>';
  html += '<h1>Todo List</h1>';
  html += '<ul>';
  var itemsView = items.map(function(item){
    return '<li>' + item + '</li>'
  }).join('');
  html += '</ul>';
  html += '<form method="post" action="/">';
  html += '<p><input type="text" name="item" /></p>';
  html += '<p><input type="submit" value="Add Item" /></p>';
  html += '</form></body></html>';
  html += '<div>'+ itemsView + '</div>';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

export function add(req, res){
  var qs = require('querystring');
  var body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk )=>{ body += chunk });
  req.on('end',()=>{
      let ob = qs.parse(body);
      console.log("Body parsed:" + ob.item);
      items.push(ob.item);
      show(res);
  });
}
