const hamMenu = document.querySelector('#hamburger');
const offScreenMenu = document.querySelector('#off-screen-menu');
const addTimerBtn = document.querySelector('#add-timer-btn');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#close-modal');
const timerDiplay = document.querySelector('#timer-display');
const pauseBtn = document.querySelector('#pause-btn-timer');
const resetBtn = document.querySelector('#reset-timer-btn');



// hamburger navigation

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
} )

// modals part

openModal1.addEventListener('click', () => {
    modal1.show()
})

closeModalbtn.addEventListener('click', () => {

        modal1.close()
})

closeModal1.addEventListener('click', () => {
    
    if(input.value === '') {
        inputAlert.styles.display = 'block'

    }else {
        modal1.close();
        modal2.show();

    }
})
