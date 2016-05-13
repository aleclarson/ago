var ago, isType, units;

isType = require("type-utils").isType;

units = require("./units");

ago = module.exports = function(amount, unit) {
  var ms, now;
  now = Date.now();
  if (isType(amount, Date)) {
    return now - amount.getTime();
  }
  if (!isType(amount, Number)) {
    throw TypeError("'amount' must be a Number");
  }
  if (!isType(unit, String)) {
    throw TypeError("'unit' must be a String");
  }
  ms = units.quotients[unit];
  if (ms == null) {
    throw Error("'unit' has an unexpected value");
  }
  return now - amount * ms;
};

ago.fromNow = function(amount, unit) {
  return ago(0 - amount, unit);
};

ago.toString = function(value, labels) {
  var count, diff, divisor, now, ref, result, unit;
  if (labels == null) {
    labels = units.labels;
  }
  result = null;
  now = Date.now();
  if (isType(value, Date)) {
    value = value.getTime();
  }
  diff = now - Math.min(value, now);
  diff /= units.quotients.m;
  ref = units.divisors;
  for (unit in ref) {
    divisor = ref[unit];
    if (diff < units.ceilings[unit]) {
      count = String(Math.floor(diff / divisor));
      result = labels[unit].replace("%t", count);
      break;
    }
  }
  return result;
};

//# sourceMappingURL=../../map/src/index.map
