const taskList = document.getElementById("tasko")
const taskInput = document.getElementById("taskInput");
const btn = document.getElementById("button");

var list = document.createElement("p");
function addTask() {
  list.textContent = taskInput.value;
  taskList.appendChild(list);
  taskInput.value ="";

}
btn.addEventListener("click", addTask);


function click(){
  list.style.textDecoration = "line-through"
}
list.addEventListener("click", click);



function dbclick(){
  // taskList.removeChild(list);
taskList.removeChild(list);
}
list.addEventListener("dbclick", dbclick);