//To Add new Task
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
//To close the task
  var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// //SELECTORS
// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-List");

// //EVENT
// todoButton.addEvenetListener("click", addTodo);
// todoList.addEvenetListener("clcik", deleteChceck);

// //function
// function addTodo(event) {
//   event.preventDefault();

//   //todo Div
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   //create Li
//   const newTodo = document.createElement('li');
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add('todo-item');
//   todoDiv.appendChild(newTodo);

//   //check mark button
//   const completedButton = document.createElement('button');
//   completedButton.innnerHTML = '<i class="fas fa-check"></i>';
//   completedButton.classList.add("complete-btn");
//   todoDiv.appendChild(completedButton);

//   //check trash button
//   const trashButton = document.createElement('button');
//   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//   trashButton.classList.add("trash-btn");
//   todoDiv.appendChild(trashButton);

//   //Append to list
//   todoList.appendChild(todoDiv);

//   //clear to input value
//   todoInput.value = "";
// }
// function deleteCheck(e); {
//   const item = e.target;
//   if (item.classList[0] === "trash-btn") {
//     const todo = item.parentElement;
//     todo.remove();
//   }
// //Check mark
// if (item.classList[0] === "complete-btn") {
//   const todo = item.parentElement;
//   todo.classList.toggle("completed");
  
// }

// }