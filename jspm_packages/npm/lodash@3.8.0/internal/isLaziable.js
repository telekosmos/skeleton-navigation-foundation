/* */ 
var LazyWrapper = require("./LazyWrapper"),
    getFuncName = require("./getFuncName"),
    lodash = require("../chain/lodash");
function isLaziable(func) {
  var funcName = getFuncName(func);
  return !!funcName && func === lodash[funcName] && funcName in LazyWrapper.prototype;
}
module.exports = isLaziable;
