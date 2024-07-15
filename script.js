function toggleMenu() {
    var menu = document.getElementById('popup-menu');
    var overlay = document.getElementById('overlay');
    var about = document.getElementById('about');
    var projects = document.getElementById('projects');
    var header = document.getElementById('header');
    var nameTitle = document.getElementById('nameTitle');
    var contact = document.getElementById('contact');
    var homeVideo = document.getElementById('homeVideo');

    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        overlay.style.display = 'block';
        about.classList.add('blur');
        projects.classList.add('blur');
        header.classList.add('blur');
        nameTitle.classList.add('blur');
        contact.classList.add('blur');
        homeVideo.classList.add('blur');

    } else {
        menu.style.display = 'none';
        overlay.style.display = 'none';
        about.classList.remove('blur');
        projects.classList.remove('blur');
        header.classList.remove('blur');
        nameTitle.classList.remove('blur');
        contact.classList.remove('blur');
        homeVideo.classList.remove('blur');

    }
}