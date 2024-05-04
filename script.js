var timer = document.querySelector('.timer');
var button = document.querySelector('.timerButton');
var minutesTens = document.getElementById('minutesTens');
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
        button.textContent = "Stop";
        timeDown();
    }

    button.classList.toggle('timeStop');
})



function timeDown() {
    if (isTimeRunning) {

        if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0 && parseInt(minutesOnes.innerHTML) === 0 && parseInt(minutesTens.innerHTML) === 0) {
            minutesOnes.innerHTML = parseInt(minutesOnes.innerHTML) + 5;
            isTimeRunning = false;
            button.textContent = "Start";
            button.classList.remove('timeStop');
            return;
        }

        if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0 && parseInt(minutesOnes.innerHTML) === 0) {
         minutesTens.innerHTML = parseInt(minutesTens.innerHTML) - 1;    
         minutesOnes.innerHTML = parseInt(minutesOnes.innerHTML) + 10;
         console.log("less than 20 minutes");
        }

       if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0) {
        secondsTens.innerHTML = parseInt(secondsTens.innerHTML) + 5;
        secondsOnes.innerHTML = parseInt(secondsOnes.innerHTML) + 9;
        minutesOnes.innerHTML = parseInt(minutesOnes.innerHTML) - 1;
        console.log("seconds reset");
       }

       if (parseInt(secondsOnes.innerHTML) === 0) {
        secondsTens.innerHTML = parseInt(secondsTens.innerHTML) - 1;
        secondsOnes.innerHTML = parseInt(secondsOnes.innerHTML) + 9;
        console.log('tenths of a second have lowered');
       }


       else {
        secondsOnes.innerHTML = parseInt(secondsOnes.innerHTML) - 1;
       }
    }
}

setInterval(timeDown, 1000);