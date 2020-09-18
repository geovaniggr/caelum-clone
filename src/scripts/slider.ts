(function () {
    let index = 0;
    let widthOfTranslate = 0;
    let typeOfTranslate = "";
    let timeout: number = 0;
    const delay = 300;

    const images = document.querySelectorAll('.instructors__card') as NodeListOf<HTMLElement>;
    const nextButton = document.querySelector('.instructors__slider--next') as HTMLElement;
    const previousButton = document.querySelector('.instructors__slider--back') as HTMLElement;

    const getClientWidth = () => {
        if((images[0].querySelector('.instructors__photo') as HTMLImageElement).width > 200){
            widthOfTranslate = 60;
            typeOfTranslate = "vw"
        } else {
            widthOfTranslate = 200;
            typeOfTranslate = "px"
        } 
    }

    const translate = (element: HTMLElement) => element.style.transform = `translateX(${(-index * widthOfTranslate)}${typeOfTranslate})`;

    nextButton.addEventListener('click', () => {
        index++;
        if (index >= images.length)
            index = 0;
        images.forEach(translate)
    });

    previousButton.addEventListener('click', () => {
        index--;
        if (index < 0)
            index = images.length - 1;
        images.forEach(translate);
    });

    window.addEventListener('resize',  () => {
        clearTimeout(timeout);

        timeout = setTimeout(getClientWidth, delay);
    });

    getClientWidth();
})();