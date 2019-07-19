let timerTextBox = document.getElementById("timerTextBox")
let startButton = document.getElementById("startButton")
let countDownClockDiv = document.getElementById("countDownClockDiv")
let timerH1 = document.getElementById("timerH1")

let counter = 0
let intervalID = -1
startButton.addEventListener('clock',function() {

    let counter = timerTextBox.nodeValue

    let intervalID = window.setInterval(() => {
        counter++
        
        timerH1.innerHTML = counter
        
    },1000)

})
