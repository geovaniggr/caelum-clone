"use strict";
(function () {
    const menu = document.querySelector('.menu');
    const closeMenuButton = document.querySelector('.menu__button');
    const openMenuButton = document.querySelector(".header__menu");
    const closeMenuAction = () => {
        document.body.style.overflow = "initial";
        menu.classList.remove('active');
        document.body.lastChild.remove();
    };
    const createBrightlessDiv = () => {
        const style = {
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "6",
        };
        const div = document.createElement('div');
        div.onclick = closeMenuAction;
        return addStyleToHtmlElement(div, style);
    };
    closeMenuButton.addEventListener('click', closeMenuAction);
    openMenuButton.addEventListener('click', () => {
        document.body.style.overflow = "hidden";
        menu.classList.add('active');
        document.body.appendChild(createBrightlessDiv());
    });
})();
