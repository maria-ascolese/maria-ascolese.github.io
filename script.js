document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.forEach(function(innerLink) {
                innerLink.classList.remove('active');
            });

            link.classList.add('active');
            
            document.body.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;

            document.querySelectorAll('section').forEach(function(sec) {
                sec.classList.remove('active');
            });

            let targetSection = document.querySelector(e.target.getAttribute('href'));
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});
