/* */ 
var baseIsMatch = require("../internal/baseIsMatch"),
    bindCallback = require("../internal/bindCallback"),
    isStrictComparable = require("../internal/isStrictComparable"),
    keys = require("../object/keys"),
    toObject = require("../internal/toObject");
function isMatch(object, source, customizer, thisArg) {
  var props = keys(source),
      length = props.length;
  if (!length) {
    return true;
  }
  if (object == null) {
    return false;
  }
  customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 3);
  object = toObject(object);
  if (!customizer && length == 1) {
    var key = props[0],
        value = source[key];
    if (isStrictComparable(value)) {
      return value === object[key] && (value !== undefined || (key in object));
    }
  }
  var values = Array(length),
      strictCompareFlags = Array(length);
  while (length--) {
    value = values[length] = source[props[length]];
    strictCompareFlags[length] = isStrictComparable(value);
  }
  return baseIsMatch(object, props, values, strictCompareFlags, customizer);
}
module.exports = isMatch;
