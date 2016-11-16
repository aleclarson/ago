
{Number} = require "Nan"

assertType = require "assertType"
isType = require "isType"

units = require "./units"

ago = (amount, unit) ->
  now = Date.now()

  if isType amount, Date
    return now - amount.getTime()

  assertType amount, Number
  assertType unit, String

  ms = units.quotients[unit]
  assertType ms, Number

  return now - amount * ms

ago.fromNow = (amount, unit) ->
  return ago 0 - amount, unit

ago.toString = (value, labels = units.labels) ->
  now = Date.now()
  result = null

  if isType value, Date
    value = value.getTime()

  diff = now - Math.min value, now
  diff /= units.quotients.m

  for unit, divisor of units.divisors
    continue if diff > units.ceilings[unit]
    count = String Math.floor diff / divisor
    result = labels[unit].replace "%t", count
    break

  return result

module.exports = ago
