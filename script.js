document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.body.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
            
            document.querySelectorAll('section').forEach(function(sec) {
                sec.style.display = "none";
            });

            let targetSection = document.querySelector(e.target.getAttribute('href'));
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});
