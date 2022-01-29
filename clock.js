let secDegrees = 0;
let minDegrees = 0;
let hourDegrees = 0;

const second = document.getElementById("second")
const minute = document.getElementById("minute")
const hour = document.getElementById("hour")
const date = new Date();

let s = date.getSeconds()
const secondCount =() => {
    console.log(s, secDegrees)
    if(s < 59) {
        secDegrees = s * 6
        second.style.transform = "rotate(" + secDegrees + "deg)"
        s++
        secDegrees += 6
        todaysDate.innerText = new Date()
        setTimeout(secondCount, 1)
    } else {
        second.style.transform = "rotate(" + secDegrees + "deg)"
        s = 0
        secDegrees = 0
        todaysDate.innerText = new Date()
        setTimeout(secondCount, 1000)
    }
}

let m = date.getMinutes()
const minuteCount =() => {
    console.log(m, minDegrees)
    if(m > 59) {
        minDegrees = m * 6
        minute.style.transform = "rotate(" + minDegrees + "deg)"
        m++
        minDegrees += 6
        setTimeout(minuteCount, 60000)
    } else {
        minute.style.transform = "rotate(" + secDegrees + "deg)"
        m = 0
        minDegrees = 0
        setTimeout(minuteCount, 60000)
    }
}

let h = date.getHours()
const hourCount =() => {
    if(h < 23) {
        hourDegrees = h * 30
        hour.style.transform = "rotate(" + hourDegrees + "deg)"
        h++
        hourDegrees += 30
        setTimeout(hourCount, 360000)
    } else {
        hour.style.transform = "rotate(" + hourDegrees + "deg)"
        h = 0
        hourDegrees = 0
        setTimeout(hourCount, 360000)
    }
}

secondCount()
minuteCount()
hourCount()

