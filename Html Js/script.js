const slider = document.querySelector(".slider");
let currentIndex = 0;

function nextSlide(){
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSliderPosition();
}

function updateSliderPosition(){
    slider.style.transform = `translateX(-${currentIndex*100}%)`
}

setInterval(nextSlide,3000);