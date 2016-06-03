var path = require('path');
var fs = require('fs');
var args = process.argv.splice(2);
var commnad = args.shift();
console.log("command used: " + commnad)
var taskDescription = args.join(' ');
var file = path.join(process.cwd(), 'store');

/*
  Load tasks and parse to an array the tasks file
*/
function loadOrInitializeTaskArray(file, cb){
  fs.exists(file, (exists)=>{
    var tasks = [];
    if(exists){
      fs.readFile(file, 'utf8', (err, data)=>{
        if(err) throw err;
        var data = data.toString();
        tasks = JSON.parse(data || '[]');
        cb(tasks); // functional programming
      });
    } else{
      cb([]);
    }
  });
}

/*
  Iterate over the array to list all task
*/
function listTasks(file){
  loadOrInitializeTaskArray(file, (tasks)=>{
    for (var i in tasks) {
      if (tasks.hasOwnProperty(i)) {
        console.log("obj." + i +'=' + tasks[i]);
      }
    }
  });
}

/*
  Store json-serialized tasks into a file
*/

function storeTasks(file, tasks){
    fs.writeFile(file, JSON.stringify(tasks), 'utf8', (err)=>{
      if(err) throw err;
      console.log("Saved tasks");
    });
}

/*
  Add task to file
*/
function addTask(file, taskDescription){
  loadOrInitializeTaskArray(file, (tasks)=>{
    tasks.push(taskDescription);
    storeTasks(file, tasks);
  })
}

switch (commnad) {
  case 'list':
    listTasks(file);
    break;
  case 'add':
    addTask(file, taskDescription);
    break;
  default:
    console.log("Usage: " + process.arg[0] + 'list | add [taskDescription]');
}



// createServer((req, res)=>{
//   ++counter;
//   res.write('I have accessed :' + counter + ' times');
//   res.end('counter:' + counter);
// }).listen(3000, '127.0.0.1');
// console.log("Server running port 3000");
