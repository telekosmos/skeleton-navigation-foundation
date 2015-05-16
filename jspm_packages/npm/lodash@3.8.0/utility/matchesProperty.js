/* */ 
var baseClone = require("../internal/baseClone"),
    baseMatchesProperty = require("../internal/baseMatchesProperty");
function matchesProperty(path, value) {
  return baseMatchesProperty(path, baseClone(value, true));
}
module.exports = matchesProperty;
