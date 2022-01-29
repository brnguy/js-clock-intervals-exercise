/* VARIABLES */
let seconds = 0
let minutes = 0
let hours = 0

/* DOM Stuff */
const secondHand = document.querySelector("#second")
const minuteHand = document.querySelector("#minute")
const hourHand = document.querySelector("#hour")

/* Program logic */
const clockRun = () => {
    console.log(seconds)
    // calculate seconds to degrees for the css rotation
    const secToDeg = (seconds * 6)
    const minToDeg = (minutes * 6)
    const hourToDeg = (hours * 30)
    // grab the sec hand element and update the css
    secondHand.style.transform = 'rotate(' + secToDeg + 'deg)'
    minuteHand.style.transform = 'rotate(' + minToDeg + 'deg)'
    hourHand.style.transform = 'rotate(' + hourToDeg + 'deg)'
    // increment the time
    seconds++
    if (seconds === 60) {
        // a minute has passed
        seconds = 0
        minutes++
    }
    if (minutes === 60) {
        // an hour has passed
        minutes = 0
        hours ++
    }
}

setInterval(clockRun, 1)