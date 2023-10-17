/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== Projects SHOW ====================*/
function exibirPrimeiraImagem() {
    var images = document.querySelectorAll(".project-image");
    images[0].click();
}

function mostrarProjeto(projeto) {
    var nomeProjeto = document.querySelector(".project-details h1");
    var subDesc = document.querySelector(".project-details h2");
    var descricaoProjeto = document.querySelector(".project-details p");
    var projectImages = document.querySelector(".project-images");
    var projectlink = document.querySelector(".project-details a");
    var projectTags = document.querySelector(".project-details h3");
    switch (projeto) {
        case 1:
            nomeProjeto.innerHTML = "AstroShows";
            subDesc.innerHTML = "Plataforma de venda de ingressos";
            descricaoProjeto.innerHTML = "<li><b>Painel Administrativo<b></li><li>Autenticação de usuário</li> <li>Design minimalista, moderno e funcional</li>";
            projectlink.innerHTML = `
                        <a class="projects-link color-first" href="https://www.linkedin.com/posts/gabrielsilvalves331_javascript-css-php-activity-7017916449834868736-elb4?utm_source=share&utm_medium=member_desktop" target="_blank"><i class="fas fa-external-link-alt"></i> Ver <span class="color-first">AstroShows</span></a>
                    `;
            projectTags.innerHTML = `
                        <div class="project-tags">
                        <p>PHP</p>
                        <p>Laravel</p>
                        <p>Blade</p>
                        <p>Vite</p>
                        </div>
                    `;
            projectImages.innerHTML = `
            <div class="carousel">
                <div><img class="project-image" src="img/astroshows1.png" alt="Projeto 1 Imagem 1"></div>
                <div><img class="project-image" src="img/astroshows2.png" alt="Projeto 1 Imagem 2"></div>
                <div><img class="project-image" src="img/astroshows3.png" alt="Projeto 1 Imagem 3"></div>
            </div>
        `;
            break;
        case 2:
            nomeProjeto.innerHTML = "KalderBlog";
            subDesc.innerHTML = "Blog sobre a Indústria Musical";
            descricaoProjeto.innerHTML = "Projeto feito com maior atenção ao front-end.<li><b>Painel Administrativo<b></li><li>Autenticação de usuário</li> <li>Design minimalista, moderno e funcional</li>";
            projectlink.innerHTML = `<a class="projects-link color-first" href="https://www.linkedin.com/posts/gabrielsilvalves331_vite-laravel-frontend-activity-7111082136538918912-oiDO?utm_source=share&utm_medium=member_desktop" target="_blank"><i class="fas fa-external-link-alt"></i> Ver <span class="color-first">KalderBlog</span></a>`;
            projectTags.innerHTML = `
                        <div class="project-tags">
                        <p>PHP</p>
                        <p>Laravel</p>
                        <p>Blade</p>
                        <p>Vite</p>
                        </div>
                    `;
            projectImages.innerHTML = `
            <div class="carousel">
                <div><img class="project-image" src="img/kalderblog1.png" alt="Projeto 1 Imagem 1"></div>
                <div><img class="project-image" src="img/kalderblog2.png" alt="Projeto 1 Imagem 2"></div>
                <div><img class="project-image" src="img/kalderblog4.png" alt="Projeto 1 Imagem 3"></div>
                <div><img class="project-image" src="img/kalderblog5.png" alt="Projeto 1 Imagem 3"></div>
            </div>
        `;
            break;
        case 3:
            nomeProjeto.innerHTML = "Darkwood";
            subDesc.innerHTML = "Tela de exibição de um jogo.";
            descricaoProjeto.innerHTML = "Projeto demonstrativo e de aprendizado";
            projectlink.innerHTML = `<a class="projects-link color-first" href="https://darkwood.vercel.app" target="_blank"><i class="fas fa-external-link-alt"></i> Ver <span class="color-first">Darkwood</span></a>`;
            projectTags.innerHTML = `
                            <div class="project-tags">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            
                        `;
            projectImages.innerHTML = `
            <div class="carousel">
                <div><img class="project-image" src="img/darkwood1.png" alt="darkwood1"></div>
                <div><img class="project-image" src="img/darkwood2.png" alt="Projeto 3 Imagem 2"></div>
                
            </div>
        `;
        break;
        case 4:
            nomeProjeto.innerHTML = "JS Concepts";
            subDesc.innerHTML = "Início do meu aprendizado de JavaScript, CSS e HTML";
            descricaoProjeto.innerHTML = "Projeto desenvolvido no início do meu aprendizado.";
            projectlink.innerHTML = `<a class="projects-link color-first" href="https://gabrielsilvamel.github.io/Aulas_JS/" target="_blank"><i class="fas fa-external-link-alt"></i> Ver <span class="color-first">JS Concepts</span></a>`;
            projectTags.innerHTML = `
                            <div class="project-tags">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>  
                        `;
            projectImages.innerHTML = `
            <div class="carousel">
                <div><img class="project-image" src="img/javascript.png" alt="javascrip1"></div>
            </div>
        `;
            break;
        case 5:
            nomeProjeto.innerHTML = "Portfólio";
            subDesc.innerHTML = "Meu Portfólio Responsivo";
            descricaoProjeto.innerHTML = "Feito <b>sem Bootstrap</b>, com um design moderno e profissional. Nas fotos abaixo é possível conferir o design antigo do meu portfólio e notar a minha evolução como programador.<br> Dark/Light Theme";
            projectlink.innerHTML = `<a class="projects-link color-first" href="https://gabrielsilvamel.github.io/Portfolio" target="_blank"><i class="fas fa-external-link-alt"></i> Ver <span class="color-first">Portfólio</span></a>`;
            projectTags.innerHTML = `
                            <div class="project-tags">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        `;
            projectImages.innerHTML = `
            <div class="carousel">
                <div><img class="project-image" src="img/portfolio.png" alt="darkwood1"></div>
                <div><img class="project-image" src="img/portfolioantigo.png" alt="Projeto 3 Imagem 2"></div>
            </div>
        `;
            break;
    }
    
    var overlays = document.querySelectorAll(".overlay");
    overlays.forEach(function (overlay, index) {
        overlay.addEventListener('click', function () {
            exibirPrimeiraImagem(); // Chama a função para exibir a primeira imagem
        });
    });

}

/*==================== Projects Swiper ====================*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var appendNumber = 4;
var prependNumber = 1;
document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
    });
document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
    });
document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
    });
document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
    });


