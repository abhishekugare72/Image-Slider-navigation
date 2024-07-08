document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider figure');
    const links = document.querySelectorAll('.link');
    const images = document.querySelectorAll('#slider figure img');
    let currentIndex = 0;
    const totalImages = images.length;
    const animationDuration = 30000; 
    const intervalDuration = animationDuration / totalImages;

    function updateSlider() {
        slider.style.left = `-${currentIndex * 100}%`;
        links.forEach((link, index) => {
            if (index === currentIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        currentIndex = (currentIndex + 1) % totalImages;
    }

    function startAnimation() {
        updateSlider(); 
        setInterval(updateSlider, intervalDuration);
    }

    let loadedImages = 0;
    images.forEach(img => {
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                startAnimation();
            }
        };
        if (img.complete) img.onload();
    });
});