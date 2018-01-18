//UI variables:
    //form
const form = document.querySelector("#task-form");
    //ul
const taskList = document.querySelector(".collection");
    //delete ul btn
const clearBtn = document.querySelector(".clear-tasks");
    //input filter
const filter = document.querySelector("#filter");
    // task input
const taskInput = document.querySelector("#task");

// Invoke load all event listeners function:
loadEventListeners();

// load all event listeners function:
function loadEventListeners(){
    //add task event:
    form.addEventListener("submit", addTask);
    //remove task event:
    taskList.addEventListener("click", removeTask);
    //clear all task from ul event:
    clearBtn.addEventListener("click", clearTasks);
    //filter task event:
    filter.addEventListener("keyup", filterTasks);
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

//function remove task:
function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure you want to delete this task?")){
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

//function clear task list
function clearTasks(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    e.preventDefault();
}

// function to filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}