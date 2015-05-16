/* */ 
var baseIsFunction = require("../internal/baseIsFunction"),
    isNative = require("./isNative");
var funcTag = '[object Function]';
var objectProto = Object.prototype;
var objToString = objectProto.toString;
var Uint8Array = isNative(Uint8Array = global.Uint8Array) && Uint8Array;
var isFunction = !(baseIsFunction(/x/) || (Uint8Array && !baseIsFunction(Uint8Array))) ? baseIsFunction : function(value) {
  return objToString.call(value) == funcTag;
};
module.exports = isFunction;
