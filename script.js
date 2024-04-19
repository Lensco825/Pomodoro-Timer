var timer = document.querySelector('.timer');
var button = document.querySelector('.timerButton');
var minutesTens = document.getElementById('minuteTens');
var minutesOnes = document.getElementById('minutesOnes');
var secondsTens = document.getElementById('secondsTens');
let secondsOnes = document.getElementById('secondsOnes');
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
        timeDown();
    }

    button.classList.toggle('timeStop');
})



function timeDown() {
    if (isTimeRunning) {
       if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0) {
        secondsTens.innerHTML = parseInt(secondsTens.innerHTML) + 5;
        secondsOnes.innerHTML = parseInt(secondsOnes.innerHTML) + 9;
        minutesOnes.innerHTML = parseInt(minutesOnes.innerHTML) - 1;
       }
       else {
        secondsOnes.innerHTML = parseInt(secondsOnes.innerHTML) - 1;
       }
    }
}

setInterval(timeDown, 1000);