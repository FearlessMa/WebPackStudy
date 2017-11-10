var path = require('path');
console.log(__dirname + '/src');
console.log(path.resolve(__dirname, '/src'));
console.log('__dirname');
console.log(__dirname);
console.log('__filename');
console.log(__filename);
console.log(path.resolve(__dirname, 'b.js'));
const b = path.resolve(__dirname, 'b.js');
const B=require(b);
console.log('path.join()');
console.log(path.join(__dirname,'b.js'));
//console.log(B);
/*
D:\WebPack\webpack-demo/src
D:\src
__dirname
D:\WebPack\webpack-demo
__filename
D:\WebPack\webpack-demo\a.js
D:\WebPack\webpack-demo\b.js
this is b.js
���� b.js
*/