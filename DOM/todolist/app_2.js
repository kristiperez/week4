
let addButton = document.getElementById("addButton")
let taskTextBox = document.getElementById("taskTextBox")
let pendingTasksUl = document.getElementById("pendingTasks")
let completedTasksUl = document.getElementById("completedTasks")


addButton.addEventListener('click',function() {

    let task = taskTextBox.value
    taskTextBox.value = ""
    // create element
    let createLi = document.createElement("li")
    pendingLi.innerHTML = task // <li>Task1<li>

    //create checkbox
    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.addEventListener('click', function() {
        if(this.checked) {completedTasksUl.appendChild(this.parentElement)
        } else if(this.checked == false) {pendingTasksUl.appendChild(this.parentElement)}
    })

    let pendingLi = document.createElement("span")
    pendingLi.innerHTML = task // <li>Task1<li>

    // create remove button
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener('click', function() {
        this.parentElement.parentElement.removeChild(this.parentElement)
    })

    createLi.appendChild(checkBox)
    createLi.appendChild(pendingLi)
    createLi.appendChild(removeButton)
    pendingTaskList.appendChild(createLi)
    
})

