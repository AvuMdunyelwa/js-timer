const offScreenMenu = document.querySelector('#off-screen-menu');
const hambars = document.querySelector('#hamburger');
const addTime = document.querySelector('.add-stopwatch-btn');
const modal = document.querySelector('#modal');
const closeModalTimer = document.querySelector('#close-stopwatch');
const timerDiplay = document.querySelector('#time');
const heroSection = document.querySelector('.hero-section');
const playBtn = document.querySelector('#play-btn')
const pauseBtn = document.querySelector('#pause-btn')
const resetBtn = document.querySelector('#reset-btn');
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;
let isRunning = false;


// navigation menu 

hambars.addEventListener('click', () => {
    hambars.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
})

// stopwatch functionality

// starting a timer

addTime.addEventListener('click', () => {
    modal.show();
    heroSection.style.display = 'none';
})

closeModalTimer.addEventListener('click', () => {
    
    modal.close();
    heroSection.style.display = 'block';
    clearInterval(timer);
    timer = null;
    
})


function updateStopwatch() {
    milliseconds += 10;
    if(milliseconds >= 1000) {
        seconds++
        milliseconds = 0;
    }
    if(seconds >= 60) {
        minutes++;
        seconds = 0;
    }

    // timer display
    const padMinutes = String(minutes).padStart(2, '0');
    const padSeconds = String(seconds).padStart(2, '0');
    const padMilliseconds = String(Math.floor(milliseconds/10)).padStart(2, '0');
    timerDiplay.innerHTML = `${padMinutes}:${padSeconds}:${padMilliseconds}`
};


// stopwatch controls

playBtn.addEventListener('click', () => {
    if(!isRunning) {
        isRunning = true;
        timer = setInterval(updateStopwatch, 10);
    }else {
        isRunning = false;
        clearInterval(updateStopwatch)
    }
});

pauseBtn.addEventListener('click', () => {
    isRunning = true;
    clearInterval(timer)
});

resetBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerDiplay.innerHTML = '00:00:00'
})

