const menuButton = document.getElementById('menu_button');
const nav = document.querySelector('nav');

const viewMenu = () => {
    nav.style.display = 'block';
    menuButton.addEventListener('mouseout', hideMenu);
    nav.onmouseout = hideMenu;
}

const hideMenu = () => {
    nav.style.display = 'none';
}

menuButton.addEventListener('mouseover', viewMenu);

nav.onmouseover = viewMenu;
