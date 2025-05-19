const hamMenu = document.querySelector('#hamburger');
const offScreenMenu = document.querySelector('#off-screen-menu');
const addAlarmBtn = document.querySelector('#add-alarm-btn');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#cancel-btn');
const daysOfAlarm = document.querySelectorAll('#which-days');
const alarmDisplayContainer = document.querySelector('#alarm-display-container');
const heroIntroDisplay = document.querySelector('.hero-section');
const saveAlarmBtn = document.querySelector('#save-btn');
const alarmTimeDisplay = document.querySelector('#alarm-display');
const TimeDisplayOnCard = document.querySelector('#card-display-time');
const enterAlarmName = document.querySelector('#enter-alarm-name')
const alarmNameDisplay = document.querySelector('#alarm-name-display');
const selectedDaysDisplay = document.querySelector('#days-active');


let selectedAlarmDays = [];
let differenceInTime;
let currentTime;
let timeAlarm;
let time;
let isClicked = false;

// hamburger navigation

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
} )

// adding a alarm

addAlarmBtn.addEventListener('click', () => {
    timeAlarm = prompt('What time you want to set the alarm?');
    time = Number(timeAlarm) * 3600;
    console.log(time)
    alarmTimeDisplay.innerHTML = '00:00';
    modal.show();
    addAlarm()
})

// closing the alarm

closeModal.addEventListener('click', () => {

    modal.close();
 
})

saveAlarmBtn.addEventListener('click', () => {
    modal.close();
    heroIntroDisplay.style.display = 'none';
    alarmDisplayContainer.style.display = 'grid';


    finalDisplayOfAlarm();
    comparisonAlarmVsCurrent();
    timeLeftForNextAlarm();
})

// selecting days to set alarm 

function selectDays() {

    daysOfAlarm.forEach(day => {
        day.addEventListener('click', () => {
            day.classList.toggle('selected');

            if(day.classList.contains('selected')) {
                day.style.background = 'rgb(75, 68, 211)';
                selectedAlarmDays.push(day.textContent);
                console.log(selectedAlarmDays)
                
                
            }else {
                day.style.background = 'transparent';
                selectedAlarmDays = selectedAlarmDays.filter(d => d !== day);
                console.log(selectedAlarmDays)
            }
        })
        
    });
}

// alarm display update

function addAlarm() {
    if(time === 0) {
        alarmTimeDisplay.innerHTML = '00:00'
    }

    // time display when adding

    let minutes = Math.floor(time/3600);
    let seconds = time % 3600;

    if(seconds < 10) {seconds = '0' + seconds};
    if(minutes < 10) {minutes = '0' + minutes};

    alarmTimeDisplay.innerHTML = `${minutes}:${seconds}`;

    selectDays();
    saveData();
}

function updateDaysSelectedOnCard() {
    selectedDaysDisplay.innerHTML = '';

    selectedAlarmDays.forEach(day => {
        const dayElement = document.createElement('li');
        dayElement.textContent = day;
        dayElement.style.background = 'rgb(75, 68, 233)';
        dayElement.style.color = 'white';
        dayElement.style.padding = '7px 7px';
        dayElement.style.marginTop  = '6px';
        dayElement.style.marginRight = '6px';
        dayElement.style.fontFamily = 'poppins';
        dayElement.style.fontSize = '0.9rem'
        dayElement.style.borderRadius = '25px';
        dayElement.style.display = 'inline-block';

        selectedDaysDisplay.appendChild(dayElement)
    })
}

function finalDisplayOfAlarm() {
   TimeDisplayOnCard.innerHTML = alarmTimeDisplay.innerHTML;
    alarmNameDisplay.innerHTML = enterAlarmName.value;
    updateDaysSelectedOnCard()
}

// alarm functionality

// current time and current day

let getCurrentTimeInterval = setInterval(getCurrentTime, 1000)
function getCurrentTime() {
        // current date
        let currentDay = new Date();

        // getting the current time
        let currentHours = currentDay.getHours()*3600;
        let currentMinutes = currentDay.getMinutes();
        let currentSeconds = currentDay.getSeconds();
    
            // turning the hours and minutes to seconds
            let currentTimeInSeconds = Math.floor(currentSeconds + (currentMinutes*60) + (currentHours));
        
            return currentTimeInSeconds
}
console.log(getCurrentTime())

let getCurrentDayInterval = setInterval(getCurrentDay, 1000)
function getCurrentDay() {
    let currentDay = new Date().getDay();
    let dayArray = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa'];
    let dayName = dayArray[currentDay];

    return dayName;
}
getCurrentDay();

// comparing the alarm time vs current time

let comparisonAlarmVsCurrentInterval = setInterval(comparisonAlarmVsCurrent, 1000)
function comparisonAlarmVsCurrent() {

    if(differenceInTime === 0) {
        console.log('its working')
        if(selectedAlarmDays.includes(getCurrentDay())) {
            alert(alarmNameDisplay.innerHTML);
            clearInterval(comparisonAlarmVsCurrentInterval);
        }
    }
}

// tracking the left time for the next alarm
function timeLeftForNextAlarm() {
    let AlarmTime = time;
    console.log(AlarmTime)

    // difference between alarm and current time
    differenceInTime = AlarmTime - getCurrentTime();
    console.log(differenceInTime)
    // decrement the difference
    timeLeftUntilAlarm()
}

/*function trackLefttime() {

    // current date
    let currentDay = new Date();

    // getting the current time
    let currentHours = Math.floor(currentDay.getHours()*3600);
    let currentMinutes = Math.floor(currentDay.getMinutes());
    let currentSeconds = currentDay.getSeconds();

        // turning the hours and minutes to seconds
        let currentTimeInSeconds = currentSeconds + (currentMinutes/3600) + (currentHours * 3600)
    

    // getting alarm time
    let alarmTime = time;

    // difference between alarm and current time
    differenceInTime = Math.floor(currentTimeInSeconds - alarmTime);

    // decrement the difference
    timeLeftUntilAlarm()
}*/


let decrementInterval = setInterval(timeLeftUntilAlarm, 1000)
function timeLeftUntilAlarm() {
    let hoursLeft = Math.floor(differenceInTime/3600);
    let minutesLeft = Math.floor((differenceInTime % 3600) / 60);

    // time display
    if(minutesLeft < 10) {minutesLeft = '0'+ minutesLeft};

    const timeLeftDisplay = document.querySelector('#time-left-display');
    timeLeftDisplay.innerHTML = ` ${hoursLeft} hours, ${minutesLeft} minutes`;
    
    // reseting time left after finishing countdown
    if(minutesLeft === 0 && hoursLeft === 0){timeLeftDisplay.innerHTML = '0 hours, 0 minutes'};

    // decrementing time left
    differenceInTime--;
}

// saving the alarm set
