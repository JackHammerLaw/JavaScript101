// Complete the tasks and return your final answer

// Array Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//EXAMPLE:
// Remove the last element from elementsArray and return elements array
function removeLastElement() {
  const numbersArray = ["one", "two", "three", "four", "five"];
  //Write your code here
  numbersArray.pop(); //.pop removes last element

  return numbersArray;
}

// Insert the element 'grape' in between banana and orange
function insertElementAtIndex() {
  const fruitsArray = ["apple", "banana", "orange"];

  //Write your code here
  fruitsArray.splice(2, 0, "grape"); //element number 2, delete nothing, add grape

  return fruitsArray;
}


// Remove 'mercedez' from carsArray
function removeElementAtIndex() {
  const carsArray = ["toyota", "honda", "mercedez", "hummer"];

  //Wrie your code here
  carsArray.splice(2, 1) //element number 2, delete one value

  return carsArray;
}

module.exports = {
  removeLastElement,
  insertElementAtIndex,
  removeElementAtIndex,
};
