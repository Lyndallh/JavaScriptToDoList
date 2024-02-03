let todoTasks = [
    "Walk dog",
    "Make dinner",
    "Feed chickens",
    "Bring roosters inside at night",
    "Put roosters back out in morning"
    ];

let todoTasksStatus = [false, true, false, true, false]; // creating ability to assigning status 

// const todoList = document.getElementById('todo-list');
// updateTodoList();

// for (const [index, task] of todoTasks.entries()){
//     const newTodoTaskTextElement = createNewTodoItemElement (task,index);
// }

// function createNewTodoTaskElement(task,index){
const todoList = document.getElementById("todo-list");
for (const [index, task] of todoTasks.entries()) { // get the task and index (where it is in the array) with the index we can make a conditional statement
    const newTodoTaskTextElement = document.createElement("p"); // creating new element 'p' in html
    newTodoTaskTextElement.innerText = task;
    
    if (todoTasksStatus[index]=== true) { // if the item at the same index has the status of true, 
        //using the === means it matches exactly, including type e.g. strings can't equal numbers
        newTodoTaskTextElement.classList.add("complete") // add a new class to the element of 'complete' so we can style it in css
    }
    
    const newTodoTaskElement =document.createElement("li"); // creating a list element in html
    newTodoTaskElement.appendChild(newTodoTaskTextElement); // putting the todo list into the list ("li" html tag) that was created 
    
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button"; // adding a button in JS is not best practice in real life, this is just for practicing DOMS
    completeButtonElement.value = "Completed";
    
    newTodoTaskElement.appendChild(completeButtonElement);
    
    // alternative:    completeButtonElement.addEventListener('click', function(){}
    completeButtonElement.onclick = function () { // this is referred to as an event listener
        console.log("button clicked")
        toggleComplete(index);
    };
    
    todoList.appendChild(newTodoTaskElement);
    // return newTodoTaskElement;
}

function toggleComplete(index) {
    console.log("toggle function")
    if(todoTasksStatus[index] ===false) {
        todoTasksStatus[index] = true;
    }   else {
        todoTasksStatus[index] = false;
    }
console.log(todoTasksStatus);
}

function addTask() {
    const newTask = document.getElementById('new-task-text');
    if (newTask.value){
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = ""; 
    }
}

function updateTodoList() {}

function createNewTodoItemElement(task, index) {}

function toggleComplete(index) {}