let todoTasks = [
    "Walk dog",
    "Make dinner",
    "Feed chickens",
    "Bring roosters inside at night",
    "Put roosters back out in morning"
];
let todoTasksDueDate = [];
let todoTasksStatus = [false, true, false, true, false]; // creating ability to assigning status 
let todoTasksImportant = [false, true, true, true, false]
const todoList = document.getElementById('todo-list');

updateTodoList();

function addTask() {
    const newTask = document.getElementById('new-task-text');
    if (newTask.value.length >0){
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = ""; 
        updateTodoList();
    }
}

function updateTodoList(){
    todoList.innerText = '';
    // createNewTodoTaskElement(task,index){
// const todoList = document.getElementById("todo-list");
    for (const [index, task] of todoTasks.entries()) { // get the task and index (where it is in the array) with the index we can make a conditional statement
        const newTodoTaskElement = createNewTodoItemElement(task,index);
        todoList.appendChild(newTodoTaskElement);
    }
}

function createNewTodoItemElement(task,index){

        const newTodoTaskTextElement = document.createElement("p"); // creating new element 'p' in html
        newTodoTaskTextElement.innerText = task;
        
        if (todoTasksStatus[index]=== true) { // if the item at the same index has the status of true, 
            //using the === means it matches exactly, including type e.g. strings can't equal numbers
            newTodoTaskTextElement.classList.add("complete") // add a new class to the element of 'complete' so we can style it in css
        }
        if (todoTasksImportant[index]=== true) { // if the item at the same index has the status of true, 
            newTodoTaskTextElement.classList.add("important") // add a new class to the element of 'important' so we can style it in css
        }

        console.log(newTodoTaskTextElement.classList)

        const newTodoTaskElement =document.createElement("li"); // creating a list element in html
        newTodoTaskElement.appendChild(newTodoTaskTextElement); // putting the todo list into the list ("li" html tag) that was created 
        
        const completeButtonElement = document.createElement("input");
        completeButtonElement.type = "button"; // adding a button in JS is not best practice in real life, this is just for practicing DOMS
        completeButtonElement.value = "Completed";
        
        newTodoTaskElement.appendChild(completeButtonElement);
        
        // alternative:    completeButtonElement.addEventListener('click', function(){}
        completeButtonElement.onclick = function () { // this is referred to as an event listener
            toggleComplete(index);
        };

            const importanceButtonElement = document.createElement("input");
        importanceButtonElement.type = "button"; // adding a button in JS is not best practice in real life, this is just for practicing DOMS
        importanceButtonElement.value = "Important";
        
        newTodoTaskElement.appendChild(importanceButtonElement);

        importanceButtonElement.onclick = function () { // this is referred to as an event listener
            toggleImportance(index);
        };        
        todoList.appendChild(newTodoTaskElement);

        
        return newTodoTaskElement;
    }

function createNewTodoItemDateDueElement(dueDate,index){
    const newTodoTaskTextElement = document.createElement("p"); // creating new element 'p' in html
    newTodoTaskTextElement.innerText = task;
    
    const dueDateInputElement = document.createElement("input");
    dueDateInputElement.type = "date"; 
    dueDateInputElement.value = "Important";
}

function toggleComplete(index) {
    if(todoTasksStatus[index] ===false) {
        todoTasksStatus[index] = true;
    }   else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
}

function toggleImportance(index) {
    if(todoTasksImportant[index] ===false) {
        todoTasksImportant[index] = true;
    }   else {
        todoTasksImportant[index] = false;
    }
    updateTodoList();
}
