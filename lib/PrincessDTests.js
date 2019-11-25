var assert  = {
  isTrue: function(aTrueorAFalse) {
    if (!aTrueorAFalse) {
      throw new Error(aTrueorAFalse + " is not true!");
    } else {
      return "YAYYYY!"
    }
  },

  isFalse: function(aTrueorAFalse) {
    if (aTrueorAFalse) {
      throw new Error(aTrueorAFalse + " is not false!");
    } else {
      return "YAYYYY!"
    }
  },

  toEqual: function(value_one, value_two) {
    if (value_one !== value_two) {
      throw new Error(`Expected ${value_one} got ${value_two}!`);
    } else {
      return "YAYYYY!"
    }
  }
}
