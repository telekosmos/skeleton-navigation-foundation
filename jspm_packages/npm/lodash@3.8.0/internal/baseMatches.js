/* */ 
var baseIsMatch = require("./baseIsMatch"),
    constant = require("../utility/constant"),
    isStrictComparable = require("./isStrictComparable"),
    keys = require("../object/keys"),
    toObject = require("./toObject");
function baseMatches(source) {
  var props = keys(source),
      length = props.length;
  if (!length) {
    return constant(true);
  }
  if (length == 1) {
    var key = props[0],
        value = source[key];
    if (isStrictComparable(value)) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === value && (value !== undefined || (key in toObject(object)));
      };
    }
  }
  var values = Array(length),
      strictCompareFlags = Array(length);
  while (length--) {
    value = source[props[length]];
    values[length] = value;
    strictCompareFlags[length] = isStrictComparable(value);
  }
  return function(object) {
    return object != null && baseIsMatch(toObject(object), props, values, strictCompareFlags);
  };
}
module.exports = baseMatches;
