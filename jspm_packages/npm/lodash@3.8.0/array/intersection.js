/* */ 
var baseIndexOf = require("../internal/baseIndexOf"),
    cacheIndexOf = require("../internal/cacheIndexOf"),
    createCache = require("../internal/createCache"),
    isArrayLike = require("../internal/isArrayLike");
function intersection() {
  var args = [],
      argsIndex = -1,
      argsLength = arguments.length,
      caches = [],
      indexOf = baseIndexOf,
      isCommon = true,
      result = [];
  while (++argsIndex < argsLength) {
    var value = arguments[argsIndex];
    if (isArrayLike(value)) {
      args.push(value);
      caches.push((isCommon && value.length >= 120) ? createCache(argsIndex && value) : null);
    }
  }
  argsLength = args.length;
  if (argsLength < 2) {
    return result;
  }
  var array = args[0],
      index = -1,
      length = array ? array.length : 0,
      seen = caches[0];
  outer: while (++index < length) {
    value = array[index];
    if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
      argsIndex = argsLength;
      while (--argsIndex) {
        var cache = caches[argsIndex];
        if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value, 0)) < 0) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(value);
      }
      result.push(value);
    }
  }
  return result;
}
module.exports = intersection;
