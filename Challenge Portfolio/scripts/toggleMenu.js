document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuList = document.querySelector('.menu__list');

    menuToggle.addEventListener('click', function() {
        menuList.classList.toggle('is-open'); // Alternar clase para mostrar/ocultar el menú en dispositivos móviles
    });
});

