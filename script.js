document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Change body background color to match the clicked bubble
            document.body.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
            
            // Hide all sections
            document.querySelectorAll('section').forEach(function(sec) {
                sec.style.display = "none";
            });

            // Display the clicked section
            let targetSection = document.querySelector(e.target.getAttribute('href'));
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});
