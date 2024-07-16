function toggleMenu() {
    var menu = document.getElementById('popup-menu');
    var overlay = document.getElementById('overlay');
    var about = document.getElementById('about');
    var projects = document.getElementById('projects');
    var header = document.getElementById('header');
    var nameTitle = document.getElementById('nameTitle');
    var contact = document.getElementById('contact');
    var homeVideo = document.getElementById('homeVideo');
    var WTMMTSBody = document.getElementById('WTMMTSBody');

    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        overlay.style.display = 'block';
        about.classList.add('blur');
        projects.classList.add('blur');
        // header.classList.add('blur');
        nameTitle.classList.add('blur');
        contact.classList.add('blur');
        homeVideo.classList.add('blur');
        WTMMTSBody.classList.add('blur');

    } else {
        menu.style.display = 'none';
        overlay.style.display = 'none';
        about.classList.remove('blur');
        projects.classList.remove('blur');
        // header.classList.remove('blur');
        nameTitle.classList.remove('blur');
        contact.classList.remove('blur');
        homeVideo.classList.remove('blur');
        WTMMTSBody.classList.remove('blur');

    }
}


document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});