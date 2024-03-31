const menu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu-links');

menu.addEventListener('click', () => {
    menu.classList.toggle('menu-js');

    menuLinks.classList.toggle('menu-links-js');
})