let btnStart = document.getElementById("btnStart")
let btnEnd = document.getElementById("btnEnd")

let counter = 0
let inetvalID = -1

btnStart.addEventListener('click',() => {
    //start timer
    let intervalId = window.setInterval(() => {
        counter++

        timerH1.innerHTML = counter
    }, 1000)
})

btnEnd.addEventListener('click',() =>{

    //stop timer
    window.clearInterval(intervalID)
})