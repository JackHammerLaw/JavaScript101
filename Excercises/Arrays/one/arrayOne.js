// Complete the tasks and return your final answer

// Array Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//EXAMPLE:
// Remove the last element from elementsArray and return elements array
function removeLastElement() {
  const numbersArray = ["one", "two", "three", "four", "five"];
  //Wrie your code here
  numbersArray.pop();

  return numbersArray;
}

// Insert 'grape' after 'banana'
function insertElementAtIndex() {
  const fruitsArray = ["apple", "banana", "orange"];

  //Wrie your code here
  fruitsArray.splice(2, 0, "grape");

  return fruitsArray;
}

// Remove 'mercedez' from carsArray
function removeElementAtIndex() {
  const carsArray = ["toyota", "honda", "mercedez", "hummer"];

  //Wrie your code here
  carsArray.splice(2, 1);
  return carsArray;
}

module.exports = {
  removeLastElement,
  insertElementAtIndex,
  removeElementAtIndex,
};
