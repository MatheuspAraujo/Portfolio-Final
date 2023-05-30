//  linkagem da navbar com os topicos, quando clica, a tela desce até a seção

function inicio() {
    const section = document.getElementById("inicio");
    section.scrollIntoView({ behavior: "smooth"});
}

function scrollToSection() {
    const section = document.getElementById("projetos");
    section.scrollIntoView({ behavior: "smooth" });
}

function sobre() {
    const section = document.getElementById("sobre");
    section.scrollIntoView({ behavior: "smooth"});
}

function contato() {
    const section = document.getElementById("contato");
    section.scrollIntoView({ behavior: "smooth"});
}



// linkagem das imagens, com o perfil da rede social

function github() {
    window.open("https://github.com/MatheuspAraujo", "_blank");
}

function linkedin() {
    window.open("https://www.linkedin.com/in/matheus-pereira-de-araujo/", "_blank");
}

function youtube() {
    window.open("https://www.youtube.com/", "_blank");
}

function whatsapp() {
    window.open("https://api.whatsapp.com/send?phone=55917181492", "_blank");
}




// linkagem dos projetos com o GitHub

function teslaRepositorio() {
    window.open("https://github.com/MatheuspAraujo/Tesla", "_blank");
}

function starbucksRepositorio() {
    window.open("https://github.com/MatheuspAraujo/Starbucks", "_blank");
}

function pianoRepositorio() {
    window.open("https://github.com/MatheuspAraujo/Loja-Instrumentos", "_blank")
}

function marioRepositorio() {
    window.open("https://github.com/MatheuspAraujo/MARIO-JOGO", "_blank");
}

function googleRepositorio() {
    window.open("https://github.com/MatheuspAraujo/Google", "_blank");
}

function youtubeRepositorio() {
    window.open("https://github.com/MatheuspAraujo/Youtube-Home", "_blank");
}

function burguerRepositorio() {
    window.open("https://github.com/MatheuspAraujo/Burguer", "_blank");
}

function loginRepositorio() {
    window.open("https://github.com/MatheuspAraujo/Formulario-de-login", "_blank");
}

function spotifyRepositorio() {
    window.open("https://github.com/MatheuspAraujo/Spotify", "_blank");
}




// Função do botão, voltar ao topo

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  var button = document.getElementById("btnTop");
  if (window.pageYOffset > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

document.getElementById("btnTop").addEventListener("click", scrollToTop);

function scrollToTop() {
  var scrollDuration = 300;
  var scrollStep = -window.scrollY / (scrollDuration / 15);

  var scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
  





function menuShow() {
    let menuMobile = document.querySelector('.nav-list-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

 