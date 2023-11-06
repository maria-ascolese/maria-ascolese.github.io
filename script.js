document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('nav a');
    const colors = ['#E6A9F0', '#4C99BF', '#74FF71', '#FDE674'];
    
    navLinks.forEach(function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));

            e.target.classList.add('active');

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
