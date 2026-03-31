document.addEventListener('DOMContentLoaded', () => {
    // Parallax Logic
    const parallaxBgs = document.querySelectorAll('.parallax-bg');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        parallaxBgs.forEach(bg => {
            // Get parent section offset to calculate relative position
            const section = bg.parentElement;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Check if section is in view
            if (scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
                // Calculate speed (0.3 is the speed factor, adjust as needed)
                const yPos = (scrolled - sectionTop) * 0.3;
                bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
    });

    // Smooth scroll for nav links (if any remain)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
