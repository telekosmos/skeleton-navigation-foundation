/* */ 
var baseCopy = require("./baseCopy"),
    getSymbols = require("./getSymbols"),
    isNative = require("../lang/isNative"),
    keys = require("../object/keys");
var preventExtensions = isNative(preventExtensions = Object.preventExtensions) && preventExtensions;
var nativeAssign = (function() {
  var func = preventExtensions && isNative(func = Object.assign) && func;
  try {
    if (func) {
      var object = preventExtensions({'1': 0});
      object[0] = 1;
    }
  } catch (e) {
    try {
      func(object, 'xo');
    } catch (e) {}
    return !object[1] && func;
  }
  return false;
}());
var baseAssign = nativeAssign || function(object, source) {
  return source == null ? object : baseCopy(source, getSymbols(source), baseCopy(source, keys(source), object));
};
module.exports = baseAssign;
