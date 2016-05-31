var fs = require('fs');
var ob="";
fs.readFile('./contacts.json', function(err, data){
  console.log(new Date().getSeconds() + ":After reading");

  console.log(JSON.parse(data));
});
console.log(new Date().getSeconds());
console.log(":Before reading data");
