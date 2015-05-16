/* */ 
var baseIsEqualDeep = require("./baseIsEqualDeep");
function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
  if (value === other) {
    return true;
  }
  var valType = typeof value,
      othType = typeof other;
  if ((valType != 'function' && valType != 'object' && othType != 'function' && othType != 'object') || value == null || other == null) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}
module.exports = baseIsEqual;
