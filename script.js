let todoTasks = [
    "Walk dog",
    "Make dinner",
    "Feed chickens",
    "Bring roosters inside at night",
    "Put roosters back out in morning"
];
let todoTasksDueDate = [new Date(),new Date(),new Date(),new Date(),new Date()];
let todoTasksStatus = [false, true, false, true, false]; // creating ability to assigning status 
let todoTasksImportant = [false, true, true, true, false]

let todoObject = { }

const todoList = document.getElementById('todo-list');

updateTodoList();

function addTask() {
    const newTask = document.getElementById('new-task-text');
    const newTaskDueDate = document.getElementById('new-task-due-date');
    const newTaskDueDateLocalFomat= new Date(newTaskDueDate.value);


    if (newTask.value.length >0){

        // PUSH VALUES INTO ARRAYS
        todoTasks.push(newTask.value);
        todoTasksDueDate.push(newTaskDueDateLocalFomat);
        todoTasksStatus.push(false);

        // RESET VALUES
        newTask.value = "";
        newTaskDueDate.value = ""; 

        updateTodoList();
    }
}

function updateTodoList(){
    todoList.innerText = '';
    for (const [index, task] of todoTasks.entries()) { // get the task and index (where it is in the array) with the index we can make a conditional statement
        const newTodoTaskElement = createNewTodoItemElement(task,index);
        todoList.appendChild(newTodoTaskElement);
    }
}

function createNewTodoItemElement(task,index){
        const newTodoTaskTextElement = document.createElement("p"); // creating new element 'p' in html
        newTodoTaskTextElement.innerText = task;

        
        //----------CREATING THE LIST ----------------------
        const newTodoTaskElement =document.createElement("li"); // creating a list element in html
        newTodoTaskElement.appendChild(newTodoTaskTextElement); // putting the todo list into the list ("li" html tag) that was created 
        
        // ---------ASSIGNING CLASSES FOR STYLING -----------        
        if (todoTasksStatus[index]=== true) { // if the item at the same index has the status of true, 
            //using the === means it matches exactly, including type e.g. strings can't equal numbers
            newTodoTaskElement.classList.add("complete") // add a new class to the element of 'complete' so we can style it in css
        }
        if (todoTasksImportant[index]=== true) { // if the item at the same index has the status of true, 
            newTodoTaskElement.classList.add("important") // add a new class to the element of 'important' so we can style it in css
        }
        // if (
        //     todoTasksDueDate[index].toDateString() === new Date().toDateString()) { // if the item at the same index has the status of true, 
        //     newTodoTaskElement.classList.add("due_today") // add a new class to the element of 'duedate' so we can style it in css
        // } 
        // else 
        if (
            new Date(todoTasksDueDate[index]) < new Date()) { // if the item at the same index has the status of true, 
                newTodoTaskElement.classList.add("overdue") // add a new class to the element of 'duedate' so we can style it in css
        }
        //----------COMPLETE BUTTON----------------------
        const completeButtonElement = document.createElement("input");
        completeButtonElement.type = "button"; // adding a button in JS is not best practice in real life, this is just for practicing DOMS
        completeButtonElement.value = "Completed";       
        newTodoTaskElement.appendChild(completeButtonElement);
        
        // alternative:    completeButtonElement.addEventListener('click', function(){}
        completeButtonElement.onclick = function () { // this is referred to as an event listener
            toggleComplete(index);
        };
    //------------IMPORTANCE BUTTON -----------------
        const importanceButtonElement = document.createElement("input");
        importanceButtonElement.type = "button"; // adding a button in JS is not best practice in real life, this is just for practicing DOMS
        importanceButtonElement.value = "Important";       
        newTodoTaskElement.appendChild(importanceButtonElement);

        importanceButtonElement.onclick = function () { // this is referred to as an event listener
            toggleImportance(index);
        };
    //--------------DUE DATE------------------------
        const NewDueDateElement = document.createElement("p");
        NewDueDateElement.type = "date";
        let newDueDate = new Date(todoTasksDueDate[index]).toLocaleDateString();
        NewDueDateElement.innerText = (newDueDate);       
        newTodoTaskElement.appendChild(NewDueDateElement);

    //------------UP ARROW BUTTON -----------------
        const upButtonElement = document.createElement("input");
        upButtonElement.type = "button"; // adding a button in JS is not best practice in real life, this is just for practicing DOMS
        upButtonElement.value = "Up";       
        newTodoTaskElement.appendChild(upButtonElement);
        upButtonElement.dataset.index = index;
        upButtonElement.onclick = function (event) { // this is referred to as an event listener
            moveUp(event,index);
        };

        todoList.appendChild(newTodoTaskElement);
        return newTodoTaskElement;
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

function moveUp (event){
    const fromIndex = parseInt(event.target.getAttribute("data-index"));
    let todoTasksElement = todoTasks[fromIndex];
    let todoTasksDueDateElement = todoTasksDueDate[fromIndex];
    let todoTasksStatusElement = todoTasksStatus[fromIndex];
    let todoTasksImportantElement = todoTasksImportant[fromIndex];

    console.log("::"+todoTasks);
    console.log("::"+todoTasksDueDate);

    todoTasks.splice(fromIndex, 1);
    todoTasksDueDate.splice(fromIndex, 1);
    todoTasksStatus.splice(fromIndex, 1);
    todoTasksImportant.splice(fromIndex, 1);

        if(fromIndex === 0){
        toIndex = fromIndex;
    }   else {
        toIndex = fromIndex - 1;
    }
    todoTasks.splice(toIndex, 0, todoTasksElement);
    todoTasksDueDate.splice(toIndex, 0, todoTasksDueDateElement);
    todoTasksStatus.splice(toIndex, 0, todoTasksStatusElement);
    todoTasksImportant.splice(toIndex, 0, todoTasksImportantElement);
    console.log("::"+todoTasks);
    console.log("::"+todoTasksDueDate);

    updateTodoList();
}


// function arraymove(arr, fromIndex, toIndex) {
//     var element = arr[fromIndex];
//     arr.splice(fromIndex, 1);
//     arr.splice(toIndex, 0, element);
// }