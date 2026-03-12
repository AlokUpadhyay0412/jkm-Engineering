document.addEventListener('DOMContentLoaded', () => {
    // --- HERO SLIDER LOGIC ---
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-slide');
    const prevBtn = document.querySelector('.prev-slide');
    let current = 0;
    let slideTimer;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
        current = index;
    }

    function nextSlide() {
        let next = (current + 1) % slides.length;
        showSlide(next);
        resetTimer();
    }

    function prevSlide() {
        let prev = (current - 1 + slides.length) % slides.length;
        showSlide(prev);
        resetTimer();
    }

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 3000); // 3-second interval
    }

    // Event Listeners for Manual Control
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Initial Timer Start
    slideTimer = setInterval(nextSlide, 3000);


    // --- NAVIGATION SIGN LOGIC (+/-) ---
    const submenus = document.querySelectorAll('.has-submenu');

    submenus.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const sign = item.querySelector('.sign');
            if(sign) sign.textContent = '-';
        });
        item.addEventListener('mouseleave', () => {
            const sign = item.querySelector('.sign');
            if(sign) sign.textContent = '+';
        });
    });
});