document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('nav a');
    const colors = ['#E6A9F0', '#4C99BF', '#74FF71', '#FDE674'];
    
    navLinks.forEach(function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let newGradientColors = [...colors];
            let mainColor = colors[index];

            if (index === 0) {
                newGradientColors[0] += " 70%";
            } else if (index === colors.length - 1) {
                newGradientColors[colors.length - 1] = "30% " + newGradientColors[colors.length - 1];
            } else {
                newGradientColors.splice(index, 0, mainColor + " 70%");
            }

            let newGradient = `linear-gradient(to right, ${newGradientColors.join(', ')})`;

            document.body.style.background = newGradient;

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
