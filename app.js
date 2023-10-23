//variables for the button

let timer = document.getElementById('timer-container');
let startStopBtn = document.getElementById('start-btn');
let resetBtn = document.getElementById('reset-btn');


//creating a funtion to  display the time in the ui

let seconds = 0;
let minutes = 0;
let hours = 0;

//varibles for leading zero
let leadingHours = 0;
let leadingMin = 0;
let leadingSec = 0;


//varialbles for time to stop and start again
let timer_interval = null;
let timeStatus = 'stopped';




function stopWatch() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    //this if statement converts the leadingzero 
    //to string when the numbers are less than 2 digits
    if (seconds < 10) {
        leadingSec = '0' + seconds.toString()
    } else {
        leadingSec = seconds
    }
    if (minutes < 10) {
        leadingMin = '0' + minutes.toString()
    } else {
        leadingMin = minutes
    }
    if (hours < 10) {
        leadingHours = '0' + hours.toString()
    } else {
        leadingHours = hours
    }

    let displayTime =  document.getElementById('timer-container').innerText =  leadingHours + ' : ' + leadingMin + " : " + leadingSec;
    

}




//event listners for the start and stop button
startStopBtn.addEventListener('click', function () {

    //here when the times status is set to stopped,the user can start time
    if (timeStatus === 'stopped') {
        //code for starting the timer
        //the setInterval method is used to start a function with fast you want to display the numbers as
        timer_interval = window.setInterval(stopWatch, 900);

        //when the time has been started, the html play button chnages to the stop in case, the user wants to stop
        startStopBtn.innerHTML = '<i class="fa-solid fa-stop" id="pause"></i>';
        startStopBtn.style.backgroundColor = 'green'
        startStopBtn.style.color = 'white'
        //and here the timestatus is set to started
        timeStatus = 'started'
    }
    else
    {
        //else if the time has been paused, the clearInterval is used to pause the time
        window.clearInterval(timer_interval);

        //the startstop btn is set to play in case they want to start again
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="start"></i>';

        startStopBtn.style.backgroundColor = 'yellow'
        startStopBtn.style.color = 'green'
        //while the time status is set stopped
        timeStatus = 'stopped';
    }
})



//event listeners to reset the timer when its done
resetBtn.addEventListener('click', function () {
    
    //we clear out interval or in other words we pause it
    window.clearInterval(timer_interval)
    seconds = 0;
    minutes = 0;
    hours = 0;

    resetBtn.style.backgroundColor = 'red'
    resetBtn.style.color = 'white'
    //this displays the reset on the interface
    timer.innerHTML = '00 : 00 : 00'
})