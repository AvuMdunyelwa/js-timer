let intervalID = setInterval(updateTimer, 1000);
let enterMinutes;
let isPaused = false;
let timeValue;
// hamburger navigation
const hamMenu = document.querySelector('#hamburger');
const offScreenMenu = document.querySelector('#off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
} )

// modals part
// modal-1 (add timer)

const modal1 = document.querySelector('#modal-1');
const openModal1 = document.querySelector('#add-timer');
const closeModal1 = document.querySelector('#open-modal-2');
const closeModalbtn = document.querySelector('#close-modal-1');
const modal2 = document.querySelector('#modal-2');

const input = document.querySelectorAll('input');
const inputAlert = document.querySelector('#alert')


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
