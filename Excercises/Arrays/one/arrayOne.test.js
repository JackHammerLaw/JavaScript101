const { removeLastElement, insertElementAtIndex } = require("./arrayOne");
const expect = require("chai").expect;

describe("Array One", function () {
  it("Should remove last element from array", function () {
    const arr = removeLastElement();
    expect(arr).to.have.lengthOf(4);
    expect(arr).to.deep.equal(["one", "two", "three", "four"]);
  });
  it("Insert element in correct place", function () {
    const arr = insertElementAtIndex();
    expect(arr).to.have.lengthOf(4);
    expect(arr).to.deep.equal(["apple", "banana", "grape", "orange"]);
  });
});
