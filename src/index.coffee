
isType = require "isType"

units = require "./units"

ago = module.exports = (amount, unit) ->
  now = Date.now()
  return now - amount.getTime() if isType amount, Date
  throw TypeError "'amount' must be a Number" unless isType amount, Number
  throw TypeError "'unit' must be a String" unless isType unit, String
  ms = units.quotients[unit]
  throw Error "'unit' has an unexpected value" unless ms?
  now - amount * ms

ago.fromNow = (amount, unit) ->
  ago 0 - amount, unit

ago.toString = (value, labels = units.labels) ->
  result = null
  now = Date.now()
  value = value.getTime() if isType value, Date
  diff = now - Math.min value, now
  diff /= units.quotients.m
  for unit, divisor of units.divisors
    if diff < units.ceilings[unit]
      count = String Math.floor diff / divisor
      result = labels[unit].replace "%t", count
      break
  result
