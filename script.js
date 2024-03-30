var timer = document.querySelector('.timer');
var button = document.querySelector('.timerButton');
var minutes = document.getElementById('minutes').innerHTML;
var seconds = document.getElementById('seconds').innerHTML;


console.log(minutes);
console.log(seconds);


function timeTicking() {
    
    if (x == 0) {
        x = 59;
    }
    else {
        return x - 1;
    }
}

setTimeout(timeTicking, 1000);