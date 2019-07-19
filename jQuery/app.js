$(document).ready(() => {

    let taskTextBox = $("#taskTextBox")
    let addTaskButton = $("#addTaskButton")
    let pendingTasks = $("#pendingTasks")
    let completedTasks = $("#completedTasks")

    addTaskButton.click(() => {
        let title = taskTextBox.val()
        
        let taskLi= $("<li>")

        let checkBox = $("<input type='checkbox'>")
        taskLi.append(checkBox)
        checkBox.click(() => {
            if (checkBox.is(":checked")) {
                completedTasks.append(checkBox.parent())
            } else (pendingTasks.append(checkBox.parent()))
        })

        let taskItemHeading = $("<h4>")
        taskItemHeading.html(title)
        taskLi.append(taskItemHeading)

        let removeButton = $("<button>")
        removeButton.html("Remove")
        taskLi.append(removeButton)
        removeButton.click(() => {
            taskLi.remove()
        })

        pendingTasks.append(taskLi)
    })

})



