/* const allLinks  = document.querySelectorAll('.links')
const tracker = document.querySelector('.tracker');

function trackTheLinks(el) {
    tracker.style.width = `${el.offsetWidth}px`;
    tracker.style.left = `${el.offsetLeft}px`;
}

allLinks.forEach((item, index) => {
    item.addEventListener('click', e => {
        trackTheLinks(e.target)
    })
}) */


const menu = document.querySelector('.menu');
const allMenuLinks = document.querySelector('.menu-all-links')

menu.addEventListener('click', () => {
    menu.classList.toggle('menu-js');
    allMenuLinks.classList.toggle('allmenulinks-js')
})