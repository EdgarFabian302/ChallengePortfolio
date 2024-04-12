const menu = document.querySelector('.menu');

function toggleMenuShadow() {
    if (window.scrollY > 0) {
        menu.classList.add('has-shadow');
    } else {
        menu.classList.remove('has-shadow');
    }
}

window.addEventListener('scroll', toggleMenuShadow);

menu.addEventListener('mouseenter', () => {
    menu.classList.add('has-shadow');
});

menu.addEventListener('mouseleave', () => {
    if (window.scrollY === 0) {
        menu.classList.remove('has-shadow');
    }
});
