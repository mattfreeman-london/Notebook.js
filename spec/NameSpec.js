
function bothReturnTheSameName() {
  var people = new People
  return assert.toEqual("Matt", people.person1())
}
