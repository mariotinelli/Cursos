// input
var inputTask = document.querySelector("#add-task-input");

inputTask.addEventListener("keyup", function(e) {
    inputTask.textContent += e.key;
});

// button add
var buttonAdd = document.querySelector("#add-task-btn");

buttonAdd.addEventListener("click", function(e){
    e.preventDefault()
    var inputTask = document.querySelector("#add-task-input");

    var inputText = document.createTextNode(inputTask.textContent);

    var doneTask = document.createElement("span");
    doneTask.textContent = "<ion-icon name='checkmark-outline'></ion-icon>"

    var closeTask = document.createElement("span");
    closeTask.textContent = "<ion-icon name='close-outline'></ion-icon>"

    doneTask.setAttribute("class", "done-task");

    closeTask.setAttribute("class", "close-task"); 

    var li = document.createElement("li")

    li.appendChild(inputText)
    li.appendChild(doneTask)
    li.appendChild(closeTask)

    var listTasks = document.querySelector("#list-tasks");
    listTasks.appendChild(li)
    
    //listTasks.appendChild(inputTask.textContent)
    inputTask.textContent = ''
});

// done task
