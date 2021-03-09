const floraTitle = document.getElementById('floraTitle');
const kickboxingTitle = document.getElementById('kickboxingTitle');
const floraJpg = document.getElementById('flora');
const kickboxingJpg = document.getElementById('kickboxing');
const kickboxingArrow = document.getElementById('kickboxingArrow');
const floraArrow = document.getElementById('floraArrow');



const show = (picture, title, arrow) => {
    arrow.style.transform = 'rotate(180deg)'; // for rotating arrow
    picture.style.maxHeight = '400px';
        title.removeEventListener('click', function(){
        show(picture);
    })
    title.addEventListener('click', function(){
        hide(picture, title, arrow);
    })    
}

const hide = (picture, title, arrow) => {
    arrow.style.transform = 'rotate(0)'; // for rotating arrow
    picture.style.maxHeight = 0;
    title.removeEventListener('click', function(){
        hide(picture);
    })
    title.addEventListener('click', function(){
        show(picture, title, arrow);
    })
}

floraTitle.addEventListener('click', function(){
    show(floraJpg, floraTitle, floraArrow);
})

kickboxingTitle.addEventListener('click', function(){
    show(kickboxingJpg, kickboxingTitle, kickboxingArrow);
})

