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