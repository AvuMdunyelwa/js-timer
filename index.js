const hamMenu = document.querySelector('#hamburger');
const offScreenMenu = document.querySelector('#off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
} )

const prgressBar = document.querySelector('#timer-numbers');

function enableProgressBar() {
    prgressBar.setAttribute('role', 'progressBar');
    prgressBar.setAttribute('arial-valuenow', 0)
    prgressBar.setAttribute('arial-live', 'polite')
}

enableProgressBar()