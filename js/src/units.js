var ceilings, divisors, factors, labels, quotients;

labels = function() {
  var d, h, m, mo, ms, s, w, y;
  ms = "now";
  s = "now";
  m = "%tm";
  h = "%th";
  d = "%td";
  w = "%tw";
  mo = "%tmo";
  y = "%ty";
  return {
    ms: ms,
    s: s,
    m: m,
    h: h,
    d: d,
    w: w,
    mo: mo,
    y: y
  };
};

factors = function() {
  var d, h, m, mo, ms, s, w, y;
  ms = 1;
  s = 1000;
  m = 60;
  h = 60;
  d = 24;
  w = 7;
  mo = 30.4375;
  y = 365.25;
  return {
    ms: ms,
    s: s,
    m: m,
    h: h,
    d: d,
    w: w,
    mo: mo,
    y: y
  };
};

quotients = function() {
  var d, h, m, mo, ms, s, w, y;
  ms = factors.ms;
  s = factors.s;
  m = s * factors.m;
  h = m * factors.h;
  d = h * factors.d;
  w = d * factors.w;
  mo = d * factors.mo;
  y = d * factors.y;
  return {
    ms: ms,
    s: s,
    m: m,
    h: h,
    d: d,
    w: w,
    mo: mo,
    y: y
  };
};

divisors = function() {
  var d, h, m, mo, ms, s, w, y;
  ms = 1 / (factors.s * factors.m);
  s = 1 / factors.m;
  m = 1;
  h = factors.h;
  d = h * factors.d;
  w = d * factors.w;
  mo = d * factors.mo;
  y = d * factors.y;
  return {
    ms: ms,
    s: s,
    m: m,
    h: h,
    d: d,
    w: w,
    mo: mo,
    y: y
  };
};

ceilings = function() {
  var d, h, m, mo, ms, s, w, y;
  ms = divisors.s;
  s = divisors.m;
  m = divisors.h;
  h = divisors.d * 2;
  d = divisors.w * 2;
  w = divisors.mo * 2;
  mo = divisors.y;
  y = Infinity;
  return {
    ms: ms,
    s: s,
    m: m,
    h: h,
    d: d,
    w: w,
    mo: mo,
    y: y
  };
};

labels = labels();

factors = factors();

divisors = divisors();

quotients = quotients();

ceilings = ceilings();

module.exports = {
  labels: labels,
  factors: factors,
  divisors: divisors,
  quotients: quotients,
  ceilings: ceilings
};

//# sourceMappingURL=../../map/src/units.map