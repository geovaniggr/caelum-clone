"use strict";
(function () {
    let index = 0;
    let widthOfTranslate = 0;
    let timeout = 0;
    const delay = 300;
    const images = document.querySelectorAll('.instructors__card');
    const nextButton = document.querySelector('.instructors__slider--next');
    const previousButton = document.querySelector('.instructors__slider--back');
    const getClientWidth = () => {
        const firstImageOfCard = images[0].querySelector('.instructors__photo');
        widthOfTranslate = firstImageOfCard.width;
    };
    const translate = (element) => element.style.transform = `translateX(${(-index * widthOfTranslate)}px)`;
    nextButton.addEventListener('click', () => {
        index++;
        if (index >= images.length)
            index = 0;
        images.forEach(translate);
    });
    previousButton.addEventListener('click', () => {
        index--;
        if (index < 0)
            index = images.length - 1;
        images.forEach(translate);
    });
    window.addEventListener('resize', () => {
        clearTimeout(timeout);
        timeout = setTimeout(getClientWidth, delay);
    });
    getClientWidth();
})();
