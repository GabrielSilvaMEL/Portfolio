const themeButton = document.getElementById('theme-button');
const html = document.documentElement;

themeButton.addEventListener('click', () => {
    // Alternar entre os temas
    html.classList.toggle('dark-theme');

    // Salvar o tema atual no armazenamento local
    const isDarkTheme = html.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Verificar se o usuário já selecionou um tema anteriormente
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    // Aplicar o tema salvo
    html.classList.toggle(savedTheme);
}
/*==================== Projects SHOW ====================*/
function exibirPrimeiraImagem() {
    var images = document.querySelectorAll(".project-image");
    images[0].click();
}

function mostrarProjeto(projeto) {
    var nomeProjeto = document.querySelector(".project-details h3");
    var subDesc = document.querySelector(".project-details h5");
    var descricaoProjeto = document.querySelector(".project-details p");
    var projectImages = document.querySelector(".project-images");
    var projectlink = document.querySelector(".project-details a");
    var projectTags = document.querySelector(".project-details h6");
    switch (projeto) {
        case 1:
            nomeProjeto.innerHTML = "AstroShows";
            subDesc.innerHTML = "Plataforma de venda de ingressos";
            descricaoProjeto.innerHTML = "<li>Painel Administrativo</li><li>Autenticação de usuário</li> <li>Design minimalista, moderno e funcional</li>";
            projectlink.innerHTML = `
                        <a class="projects-link color-first " href="https://www.linkedin.com/posts/gabrielsilvalves331_javascript-css-php-activity-7017916449834868736-elb4?utm_source=share&utm_medium=member_desktop" target="_blank"><i class="fas fa-external-link-alt"></i> Ver <span class="color-first">AstroShows</span></a>
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
                <img class="project-image col-auto" src="img/astroshows1.png" alt="Projeto 1 Imagem 1">
                <img class="project-image col-auto" src="img/astroshows2.png" alt="Projeto 1 Imagem 2">
                <img class="project-image col-auto" src="img/astroshows3.png" alt="Projeto 1 Imagem 3">
            </div>
        `;
            break;
        case 2:
            nomeProjeto.innerHTML = "KalderBlog";
            subDesc.innerHTML = "Blog sobre a Indústria Musical";
            descricaoProjeto.innerHTML = "Projeto feito com maior atenção ao front-end.<li>Painel Administrativo<li>Design minimalista, moderno e funcional</li>";
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
            <div class="carousel mb-1">
               <img class="project-image col-auto" src="img/kalderblog1.png" alt="Projeto 1 Imagem 1">
               <img class="project-image col-auto" src="img/kalderblog2.png" alt="Projeto 1 Imagem 2">
            </div>
            
            <div class="carousel">
               <img class="project-image col-auto" src="img/kalderblog4.png" alt="Projeto 1 Imagem 3">
               <img class="project-image col-auto" src="img/kalderblog5.png" alt="Projeto 1 Imagem 3">
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
                <img class="project-image col-auto" src="img/darkwood1.png" alt="darkwood1">
                <img class="project-image col-auto" src="img/darkwood2.png" alt="Projeto 3 Imagem 2">
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
               <img class="project-image col-auto" src="img/javascript.png" alt="javascrip1">
            </div>
        `;
            break;
        case 5:
            nomeProjeto.innerHTML = "Portfólio";
            subDesc.innerHTML = "Meu Portfólio Responsivo";
            descricaoProjeto.innerHTML = "Design moderno e profissional. Nas fotos abaixo é possível conferir o design antigo do meu portfólio e notar a minha evolução como programador.<br> Dark/Light Theme";
            projectlink.innerHTML = `<a class="projects-link color-first" href="https://gabrielsilvamel.github.io/Portfolio" target="_blank"><i class="fas fa-external-link-alt"></i> Ver <span class="color-first">Portfólio</span></a>`;
            projectTags.innerHTML = `
                            <div class="project-tags">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        `;
            projectImages.innerHTML = `
            <div class="carousel">
                <img class="project-image col-auto" src="img/portfolio.png" alt="darkwood1">
                <img class="project-image col-auto" src="img/portfolioantigo.png" alt="Projeto 3 Imagem 2">
            </div>
        `;
            break;
    }
    
    var overlays = document.querySelectorAll(".card");
    overlays.forEach(function (overlay, index) {
        overlay.addEventListener('click', function () {
            exibirPrimeiraImagem(); // Chama a função para exibir a primeira imagem
        });
    });

}

