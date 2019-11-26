colors = {
  red : "\x1b[31m",
  white: "\x1b[37m",
  green: "\x1b[32m"
}

function logFail(message) {
  console.log(colors.red, message, colors.white)
}

function logSuccess(message) {
  console.log(colors.green, message, colors.white)
}

var expect = function(actual) {
  return ({
    toEqual: function (expected) {
      if (actual == expected) {
        logSuccess(`Pass: ${actual} equals ${expected}`)
      } else {
        logFail(`Fail: ${actual} does not equal ${expected}`)
      }
    },
    notToEqual: function (expected) {
      if (actual == expected) {
        logFail(`Fail: ${actual} equal ${expected}`)
      } else {
        logSuccess(`Pass: ${actual} does not equals ${expected}`)
      }
    },
    toInclude: function (expected) {
      if (actual.includes(expected)) {
        logSuccess(`Pass: ${actual} includes ${expected}`)
      } else {
        logFail(`Fail: expected ${actual} to include ${expected}`)
      }
    },
    notToInclude: function (expected) {
      if (actual.includes(expected)) {
        logFail(`Fail: ${actual} includes ${expected}`)
      } else {
        logSuccess(`Pass: ${actual} does not include ${expected}`)
      }
    },
    toBe: function (expected) {
      if (actual === expected) {
        logSuccess(`Pass: ${actual} is identical to ${expected}`)
      } else {
        logFail(`Fail: ${actual} is not identical to ${expected}`)
      }
    },
    notToBe: function (expected) {
      if (actual === expected) {
        logFail(`Fail: ${actual} is identical to ${expected}`)
      } else {
        logSuccess(`Pass: ${actual} is not identical to ${expected}`)
      }
    },
    toBeA: function (expected) {
      if (actual.constructor.prototype ==  expected().constructor.prototype) {
        logSuccess(`Test Passed, ${actual} is a ${expected().constructor.name}`)
      } else {
        logFail(`Test Failed, ${actual} is not a ${expected().constructor.name}`)
      }
    },
    notToBeA: function (expected) {
      if (actual.constructor.prototype ==  expected().constructor.prototype) {
        logSuccess(`Test Passed, ${actual} is not a ${expected().constructor.name}`)
      } else {
        logFail(`Test Failed, ${actual} is a ${expected().constructor.name}`)
      }
    },
    toBeTrue: function() {
      if (actual === true) {
        logSuccess(`Test Passed`)
      } else {
        logFail(`Test Failed`)
      }
    },
    notTotBeTrue: function() {
      if (actual === false) {
        logSuccess(`Test Passed`)
      } else {
        logFail(`Test Failed`)
      }
    }
  })
}
expect("false").toBe((false))
expect(0).toEqual(false)