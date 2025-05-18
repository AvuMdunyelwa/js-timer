const hamMenu = document.querySelector('#hamburger');
const offScreenMenu = document.querySelector('#off-screen-menu');
const addTimerBtn = document.querySelector('#add-timer-btn');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#close-modal');
const timerDiplay = document.querySelector('#timer-display');
const pauseBtn = document.querySelector('#pause-btn-timer');
const resetBtn = document.querySelector('#reset-timer-btn');

let intervalID = setInterval(updateTimer, 1000);
let enterMinutes;
let isPaused = false;
let timeValue =;




// hamburger navigation

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
} )

// add timer part

// opening a timer

addTimerBtn.addEventListener('click', () => {
    modal.show();
    if(intervalID !== null) {
        clearInterval(intervalID)
    };

    // adding how much should the timer last
    enterMinutes = prompt('how many minutes');
    timeValue = Number(enterMinutes) * 60;
    timerDisplay.innerHTML = '00:00';

    // updating the timer every second
    intervalID = setInterval(updateTimer, 1000);

})

closeModal.addEventListener('click', () => {
    // closing the timer
    modal.close();

    // ending the timer completely
   alert('There is a timer in progress, if you close it, it shuts down');
   clearInterval(intervalID);
   intervalID = null;
})

// executing the timer logic every second
function updateTimer() { 
   // default timer
   if(timeValue === 0) {  
     timerDisplay.innerHTML = '00:00';
   }

// minutes & seconds calculate
let minutes = Math.floor(timeValue/60);
let seconds = timeValue % 60;

// timer display
if(seconds < 10) {seconds = '0' + seconds};
if(minutes < 10) {minutes = '0' + minutes}

timer.Display.innerHTML = `${minutes}:${seconds}`;

// timer decrement 
timeValue--;

}

pauseBtn.addEventListener('click', () => {
    if(!isPaused) {
        clearInterval(intervalID);
        isPaused = true;
        const svgImage = document.querySelector('.pause-svg');
        svgImage.src = 'items/play-solid.svg';
    }else {
        intervalID = setInterval(updateTimer, 1000);
        isPaused = false;

        const svgImage2 = document.querySelector('.pause.svg');
        svgImage2.src = .items/pause-solid.svg';
    }
});

resetBtn.addEventListener('click', () => {
    timeValue = Number(enterMinutes) * 60;
})





