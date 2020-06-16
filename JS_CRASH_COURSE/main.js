// /* const s = 'technology, computers, it, code';

console.log(s.split(","));

// ARRAYS - variables that hold multtiple values

const fruits = ["apples", "oranges", "pears", 10, true];

fruits[3] = "grapes";

fruits.push("mangos");

fruits.unshift("strawberries");

fruits.pop();

console.log(Array.isAtrray("hello"));

console.log(fruits.indexOf("oranges"));

console.log(fruits);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Botson",
    state: "MA",
  },
};

person.email = "john@gmail.com";

const toDos = [
  {
    id: 1,
    text: "Take out the Trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting wiht Boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist Appt",
    isCompleted: false,
  },
];

for (let toDo of toDos) {
  console.log(toDo.id);
}

const toDoJSON = JSON.stringify(toDos);
console.log(toDoJSON);

// LOOPS

// For Loop
for (let i = 0; i < 10; i++) {
  console.log("For Loop Number: ${i}");
}

// While Loop
let i = 0;
while (i < 10) {
  console.log("While Loop Number: ${i}");
  i++;
}

for (let i = 0; i < toDos.length; i++) {
  console.log(toDos[i].text);
}

//HIGH ORDER ARRAY METHODS

forEach, map, filter;
toDos.forEach(function (toDo) {
  console.log(toDo.text);
});

const toDoText = toDos.map(function (toDo) {
  return toDo.text;
});
console.log(toDoText);

const toDoCompleted = toDos
  .filter(function (toDo) {
    return toDo.isCompleted === true;
  })
  .map(function (toDo) {
    return toDo.text;
  });
console.log(toDoCompleted);

//CONDITIONALS

const x = 10;
if (x === 10) {
  console.log("x is Equal to 10");
} else if (x > 10) {
  console.log("x is Greater Than 10");
} else {
  console.log("x is Less Than 10");
}

const x = 6;
const y = 11;
if (x > 5 && y > 10) {
  console.log("x is More Than 5 or y is More Than 10");
}

//SWITCHES

const color = "green";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

// FUCNTIONS
const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5, 5));

//CONSTRUCTOR FUNCTION
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

//INSTANTIATE OBJECT
const person1 = new Person("Jack", "Daniels", "4-3-1980");
const person2 = new Person("Jim", "Beam", "7-4-1865");

console.log(person2.getBirthYear());
console.log(person2.getFullName());

//PROTOTYPES
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

// THE DOM (USER INTERFACE)
const ul = document.querySelector(".items");
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
const btn = document.querySelector(".btn");
btn.style.background = "red";

// EVENTS

// Mouse Event
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById("my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
});

// Keyboard Event
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", (e) => {
  document.querySelector(".container").append(nameInput.value);
});

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    alert("Please enter all fields");
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    //Create new list item with user
    const li = document.createElement("li");

    //Add text node with input values
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    //Add HTML
    li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    //Append to ul
    userList.appendChild(li);

    //Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
