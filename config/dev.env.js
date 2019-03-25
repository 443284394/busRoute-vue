var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

const target = process.env.npm_lifecycle_event;
  //本地
if(target=="local"){
  var obj = {
    NODE_ENV: '"dev"',
    baseURL: '"http://127.0.0.1:8080"'
  }
}


module.exports = merge(prodEnv, obj);
