var timer = document.querySelector('.timer');
var button = document.querySelector('.timerButton');
var minutesTens = parseInt(document.getElementById('minuteTens'), 10).innerHTML;
var minutesOnes = parseInt(document.getElementById('minutesOnes'), 10).innerHTML;
var secondsTens = parseInt(document.getElementById('secondsTens'), 10).innerHTML;
var secondsOnes = parseInt(document.getElementById('secondsOnes'), 10).innerHTML;

var isTimeRunning = false;

console.log("is this alright?");
button.addEventListener('click', () => {
    if (isTimeRunning) {
        isTimeRunning = false;
       button.textContent = "Start" ;
    }
    else {
        isTimeRunning = true;
        button.textContent = "false";
    }

    button.classList.toggle('timeStop');
})

function timeDown() {
    if (isTimeRunning) {
        secondsOnes++;
    }
}

console.log(secondsOnes++);