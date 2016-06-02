import { badRequest, notFound } from '../../utils/httpUtil';

var formidable = require('formidable');
export function showUpload(req, res) {
  var html = ''
  html += '<h1>Upload Filejs</h1>';
  html += '<form method="post" action="/" enctype="multipart/form-data">'
  html += '<p><input type="text" name="name" /></p>'
  html += '<p><input type="file" name="file" /></p>'
  html += '<p><input type="submit" value="Upload" /></p>'
  html += '</form>';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

function isFormData(req){
  let type = req.headers['content-type'] || '';
  return 0 == type.indexOf('multipart/form-data');
}

export function upload(req, res){
  if(!isFormData(req)){
    return badRequest(res);
  }
  let form = new formidable.IncomingForm();
  form.on('field', (field, value)=>{
    console.log("Field Object:" + field);
    console.log("Value:" + value);
  });

  form.on('file', (name, file)=>{
    console.log("Name:" + name);
    console.log("File:" + file);
  });
  form.on('progress', function(bytesReceived, bytesExpected){
    let percent = Math.floor(bytesReceived / bytesExpected * 100);
    console.log(percent);
  });
  form.on('end',() => res.end('Upload complete!!!'))
  form.parse(req);
  console.log("Formidable form:" + form);
  // form.parse(req);

}
