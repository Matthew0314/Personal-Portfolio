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
    var projectOverview = document.getElementById('ProjectOverview');
    var projectStory = document.getElementById('ProjectStory');
    var projectGameplay = document.getElementById('ProjectGameplay');
    var projectCode = document.getElementById('ProjectCode');

    
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
        projectOverview.classList.add('blur');
        projectStory.classList.add('blur');
        projectGameplay.classList.add('blur');
        projectCode.classList.add('blur');

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
        projectOverview.classList.remove('blur');
        projectStory.classList.remove('blur');
        projectGameplay.classList.remove('blur');
        projectCode.classList.remove('blur');

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

// document.addEventListener('DOMContentLoaded', () => {
//     const projectContainers = document.querySelectorAll('.projectContainer');

//     function adjustGrid() {
//         projectContainers.forEach(container => {
//             const image = container.querySelector('.image img');

//             if (window.innerWidth <= 760) {
//                 const imageWidth = image.clientWidth;
//                 const imageHeight = image.clientHeight;

//                 container.style.gridTemplateRows = `${imageHeight}px auto`;
//                 container.style.gridTemplateColumns = `1fr`;
//             } else {
//                 container.style.gridTemplateRows = '';
//                 container.style.gridTemplateColumns = '1fr 1fr';
//             }
//         });
//     }

//     // Adjust grid when each image loads
//     projectContainers.forEach(container => {
//         const image = container.querySelector('.image img');
//         image.onload = adjustGrid;
//     });

//     // Adjust grid on window resize
//     window.addEventListener('resize', adjustGrid);

//     // Initial check to adjust the grid when the DOM is fully loaded
//     adjustGrid();
// });


document.addEventListener('DOMContentLoaded', () => {
    const projectContainers = document.querySelectorAll('.projectContainer');
    const aboutContainer = document.querySelector('.aboutContainer');

    function adjustGrid() {
        if (window.innerWidth > 760) {
            // Reset styles for screens larger than 760px
            projectContainers.forEach(container => {
                container.style.gridTemplateRows = '';
                container.style.gridTemplateColumns = '1fr 1fr';
            });
            aboutContainer.style.gridTemplateRows = '';
            aboutContainer.style.gridTemplateColumns = '';
            return;
        }

        // Adjust project containers
        projectContainers.forEach(container => {
            const image = container.querySelector('.image img');
            const imageWidth = image.clientWidth;
            const imageHeight = image.clientHeight;

            container.style.gridTemplateRows = `${imageHeight}px auto`;
            container.style.gridTemplateColumns = `1fr`;
        });

        // Adjust about container
        const aboutImage = aboutContainer.querySelector('.image img');
        const aboutImageWidth = aboutImage.clientWidth;
        const aboutImageHeight = aboutImage.clientHeight;

        aboutContainer.style.gridTemplateRows = `${aboutImageHeight}px auto`;
        aboutContainer.style.gridTemplateColumns = `1fr`;
    }

    // Adjust grid when each image loads
    projectContainers.forEach(container => {
        const image = container.querySelector('.image img');
        image.onload = adjustGrid;
    });

    const aboutImage = aboutContainer.querySelector('.image img');
    aboutImage.onload = adjustGrid;

    // Adjust grid on window resize
    window.addEventListener('resize', adjustGrid);

    // Initial check to adjust the grid when the DOM is fully loaded
    adjustGrid();
});