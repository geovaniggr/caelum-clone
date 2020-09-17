(function () {

    const menu = document.querySelector('.menu') as HTMLElement;
    const closeMenuButton = document.querySelector('.menu__button') as HTMLElement;
    const openMenuButton = document.querySelector(".header__menu") as HTMLElement;

    const createBrightlessDiv = () => {
        const style = {
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "5",
        }

        return addStyleToHtmlElement(document.createElement('div'), style);
    };


    closeMenuButton.addEventListener('click', () => {
        document.body.style.overflow = "initial";
        menu.classList.remove('active');
        (document.body.lastChild as HTMLElement).remove();
    });

    openMenuButton.addEventListener('click', () => {
        document.body.style.overflow = "hidden";
        menu.classList.add('active')
        document.body.appendChild(createBrightlessDiv());
    });

})();