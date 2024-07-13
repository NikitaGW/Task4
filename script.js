let msecBtn = document.getElementById("msec");
let minsBtn = document.getElementById("mins");
let secsBtn = document.getElementById("secs");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let msec = 0;
let secs = 0;
let mins = 0;


let timerId = null;
start.addEventListener("click", function () {
    if (timerId != null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});
stop.addEventListener("click", function () {
    clearInterval(timerId);
});
reset.addEventListener("click", function () {
    clearInterval(timerId);
    msec = secs = mins = 0;
    updateDisplay();
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    updateDisplay();
}
function updateDisplay() {
    minsBtn.textContent = formatTime(mins);
    secsBtn.textContent = formatTime(secs);
    msecBtn.textContent = formatTime(msec);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}

