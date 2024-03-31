var timer = document.querySelector('.timer');
var button = document.querySelector('.timerButton');
var minutes = parseInt(document.getElementById('minutes').innerHTML, 10);
var seconds = parseInt(document.getElementById('seconds').innerHTML, 10);


var extraSecond = seconds + 1;
var isTimeRunning = false;

console.log(minutes);
console.log(seconds);
console.log(extraSecond);

function timeTicking() {
    
    if (seconds === 0) {
        seconds = 59;
        return minutes -1;
    }
    else {
        return seconds - 1;
    }
}

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
