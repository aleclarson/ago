
labels = ->

  ms = "now"

  s = "now"

  m = "%tm"

  h = "%th"

  d = "%td"

  w = "%tw"

  mo = "%tmo"

  y = "%ty"

  { ms, s, m, h, d, w, mo, y }

factors = ->

  # Milliseconds in a millisecond
  ms = 1

  # Milliseconds in a second
  s = 1000

  # Seconds in a minute
  m = 60

  # Minutes in an hour
  h = 60

  # Hours in a day
  d = 24

  # Days in a week
  w = 7

  # Days in a month (approximate)
  mo = 30.4375

  # Days in a year (approximate)
  y = 365.25

  { ms, s, m, h, d, w, mo, y }

quotients = ->

  # Milliseconds in a millisecond
  ms = factors.ms

  # Milliseconds in a second
  s = factors.s

  # Milliseconds in a minute
  m = s * factors.m

  # Milliseconds in an hour
  h = m * factors.h

  # Milliseconds in a day
  d = h * factors.d

  # Milliseconds in a week
  w = d * factors.w

  # Milliseconds in a month (approximate)
  mo = d * factors.mo

  # Milliseconds in a year (approximate)
  y = d * factors.y

  { ms, s, m, h, d, w, mo, y }

divisors = ->

  # Minutes in a millisecond
  ms = 1 / (factors.s * factors.m)

  # Minutes in a second
  s = 1 / factors.m

  # Minutes in a minute
  m = 1

  # Minutes in an hour
  h = factors.h

  # Minutes in a day
  d = h * factors.d

  # Minutes in a week
  w = d * factors.w

  # Minutes in a month (approximate)
  mo = d * factors.mo

  # Minutes in a year (approximate)
  y = d * factors.y

  { ms, s, m, h, d, w, mo, y }

ceilings = ->

  # Minutes in a second
  ms = divisors.s

  # Minutes in a minute
  s = divisors.m

  # Minutes in an hour
  m = divisors.h

  # Minutes in two days
  h = divisors.d * 2

  # Minutes in a week
  d = divisors.w * 2

  # Minutes in two months (approximate)
  w = divisors.mo * 2

  # Minutes in a year (approximate)
  mo = divisors.y

  # Minutes in forever (approximate)
  y = Infinity

  { ms, s, m, h, d, w, mo, y }

#
# Initialization
#

labels = labels()

factors = factors()

divisors = divisors()

quotients = quotients()

ceilings = ceilings()

module.exports = { labels, factors, divisors, quotients, ceilings }
