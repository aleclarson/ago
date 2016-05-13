
# ago v1.0.0 [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

```coffee
ago = require "ago"

# Get a Number representing one day ago (in milliseconds)
ms = ago 1, "d"

# Get a Number representing one day in the future (in milliseconds)
ago.fromNow 1, "d"

# Convert the Number to a Date
date = new Date ms

# Get the difference between a Date and the current time (in milliseconds)
ago date

# Convert the Number to a String
ago.toString ms

# Convert the Date to a String
ago.toString date
```

&nbsp;

## details

- `ms`, `s`, `m`, `h`, `d`, `w`, `mo`, and `y` are the valid units.

- Years and months are approximated.

- Rounding always uses `Math.floor`.

&nbsp;

## install

```sh
npm install aleclarson/ago#1.0.0
```
