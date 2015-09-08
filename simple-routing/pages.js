var pages = [
  {routes: '', output: 'Genial Index'},
  {routes: 'about', output: 'Simple routas en Node ejemplo'},
  {routes: 'another page', output: function(){ 'Here ' + this.route}}
];
//console.log(__dirname);
 module.exports = pages;
