// colors = {
//   red : "\x1b[31m",
//   white: "\x1b[37m",
//   green: "\x1b[32m"
// }
//
// function logFail(message) {
//   console.log(colors.red, message, colors.white)
// }
//
// function logSuccess(message) {
//   console.log(colors.green, message, colors.white)
// }

var expect = function(actual) {
  return ({
    toEqual: function (expected) {
      if (actual == expected) {
        return "Pass"
      } else {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      }
    },
    notToEqual: function (expected) {
      if (actual == expected) {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      } else {
        return 'Pass'
      }
    },
    toInclude: function (expected) {
      if (actual.includes(expected)) {
        return 'Pass'
      } else {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      }
    },
    notToInclude: function (expected) {
      if (actual.includes(expected)) {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      } else {
        return 'Pass'
      }
    },
    toBe: function (expected) {
      if (actual === expected) {
        return 'Pass'
      } else {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      }
    },
    notToBe: function (expected) {
      if (actual === expected) {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      } else {
        return 'Pass'
      }
    },
    toBeA: function (expected) {
      if (actual.constructor.name == expected) {
        return 'Pass'
      } else {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      }
    },
    notToBeA: function (expected) {
      if (actual.constructor.name == expected) {
        return 'Pass'
      } else {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      }
    },
    toBeTrue: function() {
      if (actual === true) {
        return 'Pass'
      } else {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      }
    },
    notTotBeTrue: function() {
      if (actual === false) {
        return 'Pass'
      } else {
        throw Error(`Expected: ${expected}, Got: ${actual}`)
      }
    }
  })
}

function fake(name) {
  this._name = name
  this._id = Math.random()
}
var allTests = []
const scenario = function(message, fn) {
  array = []
  array.push(`Scenario: ${message}`)
  try {
    array.push(fn())
  } catch (error) {
      array.push(error)
  }
  allTests.push(array)
}
