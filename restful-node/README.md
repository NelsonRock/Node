> Exploring restfull-services in node with Es6 import and export module
```
npm install --save-dev babel-cli- babel-core-babel-preset-es2015 nodemon

```
```
Config your package.json to:
"scripts": {
  "dev": "nodemon --exec babel-node src/index.js",
  "prestart": "babel src --out-dir dist",
  "start": "node dist/index.js"
},
```

> And if you want install curl for testing!
