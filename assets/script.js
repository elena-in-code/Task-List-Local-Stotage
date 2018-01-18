//UI variables:
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Invoke load all event listeners function:
loadEventListeners();
// load all event listeners function:
function loadEventListeners(){
    //add task event:
    form.addEventListener("submit", addTask);
}
// function add task:
function addTask(e){
    if(taskInput.value === ""){
        alert("Add a task please.");
    } 
    //create li element
    const li = document.createElement("li");
    //add a class
    li.className = "collection-item";
    //Create text node and append to the li:
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link= document.createElement("a");
    // add class
    link.className = "delete-item secondary-content";
    // add icon
    link.innerHTML = "<i class='fa fa-remove'></i>";
    // append link to li:
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value = " ";
    e.preventDefault();
}