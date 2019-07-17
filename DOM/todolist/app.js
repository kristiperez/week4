
let addButton = document.getElementById("addButton")
let taskTextBox = document.getElementById("taskTextBox")
let pendingTasksUl = document.getElementById("pendingTasks")
let completedTasksUl = document.getElementById("completedTasks")


addButton.addEventListener('click',function() {

    let task = taskTextBox.value
    taskTextBox.value = ""
    // create element
    let pendingLi = document.createElement("li")
    pendingLi.innerHTML = task // <li>Task1<li>

    //create checkbox
    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.addEventListener('click', function() {
        if(this.checked) {completedTasksUl.appendChild(this.parentElement)
        } else if(this.checked == false) {pendingTasksUl.appendChild(this.parentElement)}
    })

    // create remove button
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener('click', function() {
        this.parentElement.parentElement.removeChild(this.parentElement)
    })

    pendingLi.appendChild(checkBox)
    pendingLi.appendChild(removeButton)
    pendingTasksUl.appendChild(pendingLi)
    
})

