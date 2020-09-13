// DECLARE USEFULL VAR ACCESSIBLE IN THE FULL MODULE
const inputTodo = document.getElementById("new-todo");
const btnAdd = document.getElementById("btn-add-todo");
const btnDelete = document.getElementById("btn-delete-todos");
const todos = document.getElementById("todos");

// UTILITY FUNCTIONS (BUSINESS LOCGIC)
const checkValue = () => Boolean(inputTodo.value); // returns true if the input's value is truthy
function addTodo() {
  const li = document.createElement("li"); // asking for a li object
  li.innerHTML += `<li class="item">
    <span>${inputTodo.value}</span>
    <img src="caret-up-solid.svg" class="up">
    <img src="caret-down-solid.svg" class="down">
    <input class="box" type="checkbox" />
  </li>`; // defining a html template
  todos.appendChild(li); // inserting the newly created li in the ul
  inputTodo.value = ""; // reset the input's value
  inputTodo.focus(); // giving the focus back to the input


  li.querySelector(".up").onclick = moveUp;
  li.querySelector(".down").onclick = moveDown;
}


function deleteTodo() {
  const checkedBoxes = todos.querySelectorAll(".item .box:checked"); // select all the checked boxes
  checkedBoxes.forEach((box) => box.parentElement.parentElement.remove()); // loop through and remove the li

}

function moveUp() {
    console.log("up")
}

function moveDown() {
    console.log("down")
}

// EVENT LISTENER =>
btnAdd.onclick = () => {
  if (checkValue()) return addTodo();
  // id the user inputed some values in the input, add the todo
  else alert("no good input"); // else display a warning message to user
};

inputTodo.onkeyup = (evt) => {
  if (evt.keyCode === 13) {
    if (checkValue()) {
      return addTodo();
    } else alert("no good input");
  }
};

btnDelete.onclick = deleteTodo;































/*
const btnAdd = document.getElementById("btn-add");



function addElement () { 
    // create a new div element 
    const newLi = document.createElement("li"); 
    
    // and give it some content 
    const newContent = document.createTextNode("<li></li>"); 
    
    // add the text node to the newly created div
    newLi.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    const currentLi = document.getElementById("ul"); 
    document.body.insertBefore(newLi, currentLi); 
  }
  




btnAdd.addEventListener('click', () => {
    addElement();
});

*/