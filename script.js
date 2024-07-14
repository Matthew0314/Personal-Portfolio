function toggleMenu() {
    var menu = document.getElementById('popup-menu');
    var overlay = document.getElementById('overlay');

    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        overlay.style.display = 'block';

    } else {
        menu.style.display = 'none';
        overlay.style.display = 'none';

    }
}