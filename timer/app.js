let timerTextBox = document.getElementById("timerTextBox")
let startButton = document.getElementById("startButton")
let countDownClockDiv = document.getElementById("countDownClockDiv")
let timerH1 = document.getElementById("timerH1")
let endButton = document.getElementById("endButton")


intervalID = 0
startButton.addEventListener('click',function() {
    let counter = 0
    let maxTime = timerTextBox.value

    let intervalID = window.setInterval(() => {
        counter++
        
        timerH1.innerHTML = counter
        if (counter == maxTime) {
            window.clearInterval(intervalID)
        }

        endButton.addEventListener('click',() =>{

            console.log("clicked")
            //stop timer
            window.clearInterval(intervalID)
        })
        
    },1000)

})

