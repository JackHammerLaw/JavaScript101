const {
  removeLastElement,
  insertElementAtIndex,
  removeElementAtIndex,
  concatArrays,
  extractElements,
  getTheIndexOfItem,
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
  it("Concat two arrays", function () {
    const arr = concatArrays();
    expect(arr).to.have.lengthOf(6);
    expect(arr).to.deep.equal(["a", "b", "c", "d", "e", "f"]);
  });
  it("Extract the correct elements from the array", function () {
    const arr = extractElements();
    expect(arr).to.have.lengthOf(2);
    expect(arr).to.deep.equal(["Rodgers", "Flaco"]);
  });
  it("Return the correct index", function () {
    const arr = getTheIndexOfItem();
    expect(arr).to.equal(2);
  });
});
