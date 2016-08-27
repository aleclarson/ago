var Number, ago, assertType, isType, units;

Number = require("Nan").Number;

assertType = require("assertType");

isType = require("isType");

units = require("./units");

ago = function(amount, unit) {
  var ms, now;
  now = Date.now();
  if (isType(amount, Date)) {
    return now - amount.getTime();
  }
  assertType(amount, Number);
  assertType(unit, String);
  ms = units.quotients[unit];
  assertType(ms, Number);
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
  now = Date.now();
  result = null;
  if (isType(value, Date)) {
    value = value.getTime();
  }
  diff = now - Math.min(value, now);
  diff /= units.quotients.m;
  ref = units.divisors;
  for (unit in ref) {
    divisor = ref[unit];
    if (diff > units.ceilings[unit]) {
      continue;
    }
    count = String(Math.floor(diff / divisor));
    result = labels[unit].replace("%t", count);
    break;
  }
  return result;
};

module.exports = ago;

//# sourceMappingURL=map/index.map
