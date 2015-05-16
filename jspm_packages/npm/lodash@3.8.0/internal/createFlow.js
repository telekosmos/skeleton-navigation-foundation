/* */ 
var LodashWrapper = require("./LodashWrapper"),
    getData = require("./getData"),
    getFuncName = require("./getFuncName"),
    isArray = require("../lang/isArray"),
    isLaziable = require("./isLaziable");
var CURRY_FLAG = 8,
    PARTIAL_FLAG = 32,
    ARY_FLAG = 128,
    REARG_FLAG = 256;
var FUNC_ERROR_TEXT = 'Expected a function';
function createFlow(fromRight) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return function() {
        return arguments[0];
      };
    }
    var wrapper,
        index = fromRight ? length : -1,
        leftIndex = 0,
        funcs = Array(length);
    while ((fromRight ? index-- : ++index < length)) {
      var func = funcs[leftIndex++] = arguments[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var funcName = wrapper ? '' : getFuncName(func);
      wrapper = funcName == 'wrapper' ? new LodashWrapper([]) : wrapper;
    }
    index = wrapper ? -1 : length;
    while (++index < length) {
      func = funcs[index];
      funcName = getFuncName(func);
      var data = funcName == 'wrapper' ? getData(func) : null;
      if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments;
      if (wrapper && args.length == 1 && isArray(args[0])) {
        return wrapper.plant(args[0]).value();
      }
      var index = 0,
          result = funcs[index].apply(this, args);
      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  };
}
module.exports = createFlow;
