/* */ 
var MapCache = require("../internal/MapCache");
var FUNC_ERROR_TEXT = 'Expected a function';
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        cache = memoized.cache,
        key = resolver ? resolver.apply(this, args) : args[0];
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
  memoized.cache = new memoize.Cache;
  return memoized;
}
memoize.Cache = MapCache;
module.exports = memoize;
