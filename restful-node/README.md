> Exploring restfull-services in node with Es6 import and export module
```
npm install --save-dev babel-cli- babel-core-babel-preset-es2015 nodemon
```
> Config your package.json to:

 ```
"scripts": {
  "dev": "nodemon --exec babel-node src/index.js",
  "prestart": "babel src --out-dir dist",
  "start": "node dist/index.js"
},
```

> And if you want install curl for testing!
> File mainTodoApp.js is for testing purpose and other stuff like testing querystring module, we used to make a TodoApp with node server.

>Folder utils is used for function imported in mainTodoApp.js

##Don't forget to change in yout package.json the entry file##

> Folder uploadModule have upload.js file ofr testing formidable package fot testing upload file!
```
npm install formidable
```
##Don't forget to import function from upload.js file to mainTodoApp.js##
