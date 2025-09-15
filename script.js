// Select all carousels
document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.carousel-button.right');
    const prevButton = carousel.querySelector('.carousel-button.left');

    let currentIndex = 0;

    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(' + (-slideWidth * currentIndex) + 'px)';
    }

    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        updateSlidePosition();
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlidePosition();
    }, 5000);

    // Trigger coin flip after 10 seconds
setTimeout(() => {
    const img = document.getElementById('profile-img');
    img.classList.add('flip');

    // Remove the class after animation ends so it can run again if needed
    img.addEventListener('animationend', () => {
        img.classList.remove('flip');
    });
}, 10000);

});

