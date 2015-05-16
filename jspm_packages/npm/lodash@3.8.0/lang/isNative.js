/* */ 
var escapeRegExp = require("../string/escapeRegExp"),
    isObjectLike = require("../internal/isObjectLike");
var funcTag = '[object Function]';
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var objectProto = Object.prototype;
var fnToString = Function.prototype.toString;
var objToString = objectProto.toString;
var reIsNative = RegExp('^' + escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (objToString.call(value) == funcTag) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}
module.exports = isNative;
