// Первый слайдер 

let sliderFirstItems = document.querySelectorAll('.slider-first__item');
let current = 0;

const slider = () => {
    for (let i = 0; i < sliderFirstItems.length; i++) {
        sliderFirstItems[i].classList.add('slider-first__item_opacity')
    }
    sliderFirstItems[current].classList.remove('slider-first__item_opacity');
};
slider();

document.querySelector('.slider-first__move_left').onclick = () => {
    current - 1 == -1 ? current = sliderFirstItems.length - 1 : current--;
    slider();
};

document.querySelector('.slider-first__move_right').onclick = () => {
    current + 1 == sliderFirstItems.length ? current = 0 : current++;
    slider();
};

// Второй слайдер

const dots = document.getElementsByClassName('slider-second__dots-item');
const dotsArea = document.getElementById('slider-second__dots');
const slides = document.getElementsByClassName('slider-second__item');
const prev = document.getElementById('left-button');
const next = document.getElementById('right-button');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('slider-second__dots-item_active');
    }
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('slider-second__dots-item_active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

prev.onclick = function() {
    plusSlides(-1);
}
next.onclick = function() {
    plusSlides(1);
}
dotsArea.onclick = function(e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('slider-second__dots-item') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}

//Код для третьего слайдера 

let sliderThirdSlideToShow = 3;
let sliderThirdSlideToStep = 3;
let sliderThirdPositionSlide = 0;

const sliderThirdWrapper = document.querySelector('.slider-third__wrapper');
const sliderThirdTrack = document.querySelector('.slider-third__track')
const sliderThirdTrackItems = document.querySelectorAll('.slider-third__track-item');
const sliderThirdButtonLeft = document.getElementById('slider-third__button-left');
const sliderThirdButtonRight = document.getElementById('slider-third__button-right');
const sliderThirdItemsWidth = sliderThirdWrapper.clientWidth / sliderThirdSlideToShow;
const sliderThirdMovePositionSlide = sliderThirdSlideToStep * sliderThirdItemsWidth;

sliderThirdTrackItems.forEach(item => {
    item.style.minWidth = `${sliderThirdItemsWidth}px`
});

sliderThirdButtonRight.onclick = () => {
    const checkStep = sliderThirdTrackItems.length - (Math.abs(sliderThirdPositionSlide) + sliderThirdSlideToShow * sliderThirdItemsWidth) / sliderThirdItemsWidth;
    sliderThirdPositionSlide -= checkStep >= sliderThirdSlideToStep ? sliderThirdMovePositionSlide : checkStep * sliderThirdItemsWidth;
    sliderThirdPosition();
    checkButtonsSliderThird();
}

sliderThirdButtonLeft.onclick = () => {
    const checkStep = Math.abs(sliderThirdPositionSlide) / sliderThirdItemsWidth;
    sliderThirdPositionSlide += checkStep >= sliderThirdSlideToStep ? sliderThirdMovePositionSlide : checkStep * sliderThirdItemsWidth;

    sliderThirdPosition();
    checkButtonsSliderThird();
}

sliderThirdPosition = () => {
    sliderThirdTrack.style.transform = `translateX(${sliderThirdPositionSlide}px)`;
}

const checkButtonsSliderThird = () => {
    sliderThirdButtonLeft.disabled = sliderThirdPositionSlide === 0;
    sliderThirdButtonRight.disabled = sliderThirdPositionSlide <= -(sliderThirdTrackItems.length - sliderThirdSlideToShow) * sliderThirdItemsWidth
}

checkButtonsSliderThird();