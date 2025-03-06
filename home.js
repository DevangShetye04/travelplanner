let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Move the slider to the next image
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Change image every 3 seconds
setInterval(moveToNextSlide, 3000);
