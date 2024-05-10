//pomodoro elements
var timer = document.querySelector('.timer');
var button = document.querySelector('.timerButton');

//Time values
var minutesTens = document.getElementById('minutesTens');
var minutesOnes = document.getElementById('minutesOnes');
var secondsTens = document.getElementById('secondsTens');
let secondsOnes = document.getElementById('secondsOnes');

//For stopping and starting the timer
var isTimeRunning = false;
var pomodoro = true;

//getting current time
var clock = document.querySelector('.clock');
let currentDate = new Date();
var currentTime = currentDate.getTime();
console.log(currentDate);



console.log("is this alright?");
button.addEventListener('click', () => {
    if (isTimeRunning) {
        isTimeRunning = false;
       button.textContent = "Start" ;
       
    }
    else {
        isTimeRunning = true;
        button.textContent = "Stop";
        pomodoroTimer();
    }

    button.classList.toggle('timeStop');
})



<<<<<<< HEAD
function timeDown() {
    if (isTimeRunning) {

        if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0 && parseInt(minutesOnes.innerHTML) === 0 && parseInt(minutesTens.innerHTML) === 0) {
            minutesTens.innerHTML = parseInt(minutesTens.innerHTML) + 5;
            isTimeRunning = false;
=======
function pomodoroTimer() {

    if (isTimeRunning && pomodoro) {

        if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0 && parseInt(minutesOnes.innerHTML) === 0 && parseInt(minutesTens.innerHTML) === 0) {
            minutesOnes.innerHTML = parseInt(minutesOnes.innerHTML) + 5;
            isTimeRunning = false;
            button.textContent = "Start";
            button.classList.remove('timeStop');
            pomodoro = false;
            return;
        }

        if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0 && parseInt(minutesOnes.innerHTML) === 0) {
         minutesTens.innerHTML = parseInt(minutesTens.innerHTML) - 1;    
         minutesOnes.innerHTML = parseInt(minutesOnes.innerHTML) + 10;
         console.log("less than 20 minutes");
>>>>>>> 10dcc85093eab3c6d063968017c9da42049a364d
        }

       if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0) {
        secondsTens.innerHTML = parseInt(secondsTens.innerHTML) + 5;
        secondsOnes.innerHTML = parseInt(secondsOnes.innerHTML) + 10;
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

function breakTime() {
    if(isTimeRunning && !pomodoro) {
        if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0 && parseInt(minutesOnes.innerHTML) === 0 && parseInt(minutesTens.innerHTML) === 0) {
            minutesTens.innerHTML = parseInt(minutesTens.innerHTML) + 2;
            minutesOnes.innerHTML = parseInt(minutesOnes.innerHTML) + 5;
            isTimeRunning = false;
            button.textContent = "Start";
            button.classList.remove('timeStop');
            pomodoro = true;
            return;
        }

        if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0 && parseInt(minutesOnes.innerHTML) === 0) {
         minutesTens.innerHTML = parseInt(minutesTens.innerHTML) - 1;    
         minutesOnes.innerHTML = parseInt(minutesOnes.innerHTML) + 10;
         console.log("less than 20 minutes");
        }

       if (parseInt(secondsOnes.innerHTML) === 0 && parseInt(secondsTens.innerHTML) === 0) {
        secondsTens.innerHTML = parseInt(secondsTens.innerHTML) + 5;
        secondsOnes.innerHTML = parseInt(secondsOnes.innerHTML) + 10;
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

 function updateTime() {
var clock = document.querySelector('.clock');
var endTIme = document.querySelector('.end-time');
let currentDate = new Date();

clock.textContent = currentDate;
 
 }



setInterval(pomodoroTimer, 1000);
setInterval(breakTime, 1000);
setInterval(updateTime, 1000);
