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


var to = {
  equal: function(expected, actual) {
    if (expected !== actual) {
     logFail("Values are not equal")
     console.log(`Expected Value ${expected} but got ${actual}`)
    } else {
      logSuccess("Test passed")
    }
  },
  notEqual: function(expected, actual) {
    if (expected !== actual) {
      logSuccess("Test passed")
    } else {
      logFail("Values are equal")
      console.log(`Expected \"${expected}\" not to equal \"${actual}\"`)
    }
  },
  include : function(child, parent) {
    if(parent.includes(child)) {
      logSuccess("Test Passed")
    } else {
      logFail(`Expected \"${child}"\ to be in \"${parent}\"`)
    }
  },
  notInclude : function(child, parent) {
    if(parent.includes(child)) {
      logFail(`Expected \"${child}\" not to be in \"${parent}\"`)
    } else {
      logSuccess("Test Passed")
    }
  }
}

function hello() {
  return "Hello"
}

to.equal("Hell", hello())

to.notEqual("Hell", hello())

to.include("ell", hello())

to.notInclude("bye", hello())