/* */ 
var constant = require("../utility/constant"),
    isNative = require("../lang/isNative"),
    toObject = require("./toObject");
var getOwnPropertySymbols = isNative(getOwnPropertySymbols = Object.getOwnPropertySymbols) && getOwnPropertySymbols;
var getSymbols = !getOwnPropertySymbols ? constant([]) : function(object) {
  return getOwnPropertySymbols(toObject(object));
};
module.exports = getSymbols;
