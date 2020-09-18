"use strict";
(function () {
    const courseContainer = document.querySelector('.courses-container');
    const createCourseCard = (course) => {
        return `
            <a class="courses-container__card" href="#">
                <div class="course__cover" style="background-image: url(${course.url})"></div>
                <article class="course__details">
                    <h4 class="course__name">${course.title}</h4>
                    <p class="course__agenda">${course.description}</p>
                    <span class="caelum-emphasis"> Aulas Onlines </span>
                </article>
            </a>
        `;
    };
    const data = [
        { title: "C# e Orientação a Objetos", description: "Início 19 de Setembro / 40H", url: "https://s3.us-east-1.amazonaws.com/jarvis-caelum/Lo%CC%81gica-de-programac%CC%A7a%CC%83o-home.jpg" },
        { title: "Java e Orientação a Objetos", description: "Inicio 18 de Outubro / 80H", url: "https://s3.us-east-1.amazonaws.com/jarvis-caelum/Formacao-ponto-net-home.jpg" },
        { title: "Formação .NET", description: "Inicio 21 de Setembro", url: "https://s3.us-east-1.amazonaws.com/jarvis-caelum/Gerenciamento-Agil-com-Scrum-home%20.jpg" },
        { title: "Spring Framework", description: "Inicio 32 de Outubro", url: "https://s3.us-east-1.amazonaws.com/jarvis-caelum/Spring-Framework-home.jpg" },
        { title: "(CSM) Certified Scrummaster", description: "Inicio 15 de Janeiro", url: "https://s3.us-east-1.amazonaws.com/jarvis-caelum/Lo%CC%81gica-de-programac%CC%A7a%CC%83o-home.jpg" },
    ];
    data.map(createCourseCard).forEach(card => courseContainer.insertAdjacentHTML("beforeend", card));
})();
