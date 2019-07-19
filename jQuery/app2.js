$(document).ready(() => {

    let taskTextBox = $("#taskTextBox")
    let addTaskButton = $("#addTaskButton")
    let pendingTasks = $("#pendingTasks")
    let completedTasks = $("#completedTasks")

    addTaskButton.click(() => {
        let title = taskTextBox.val()
        
        let taskDiv= $("<div>")

        let checkBox = $("<input type='checkbox'>")
        taskDiv.append(checkBox)
        checkBox.click(() => {
            if (checkBox.is(":checked")) {
                completedTasks.append(checkBox.parent())
            } else (pendingTasks.append(checkBox.parent()))
        })

        let taskItemHeading = $("<h4>")
        taskItemHeading.html(title)
        taskDiv.append(taskItemHeading)

        let removeButton = $("<button>")
        removeButton.html("Remove")
        taskDiv.append(removeButton)
        removeButton.click(() => {
            taskDiv.remove()
        })

        pendingTasks.append(taskDiv)
    })

})



