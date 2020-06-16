const {
  removeLastElement,
  insertElementAtIndex,
  removeElementAtIndex,
} = require("./arrayOne");
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
  it("Remove correct element", function () {
    const arr = removeElementAtIndex();
    expect(arr).to.have.lengthOf(3);
    expect(arr).to.deep.equal(["toyota", "honda", "hummer"]);
  });
});
