//menu header para ativar o after do a ao ser clicado
const links = document.querySelectorAll(".header li a");
const links2 = document.querySelectorAll(".header-menu-second li a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  //verifica se tem uma parte doq esta escrito no texto dentro de outro texto
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);
links2.forEach(ativarLink);

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function EventosPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(EventosPergunta);

//vídeo loop
document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".video-container");

  containers.forEach(container => {
    const video = container.querySelector("video");
    const poster = container.querySelector(".poster");

    // Verifica se o poster contém a classe 'premium'
    const isPremium = poster.classList.contains('premium');

    container.addEventListener("mouseover", function () {
      poster.style.opacity = isPremium ? 0.5 : 0; // Opacidade 0.5 se for 'premium', 0 caso contrário
      video.style.opacity = 1; // Aparece o vídeo
      video.play();
    });

    container.addEventListener("mouseleave", function () {
      video.pause();
      video.currentTime = 0; // Reseta o vídeo
      video.style.opacity = 0; // Some com o vídeo
      poster.style.opacity = isPremium ? 0.5 : 1; // Traz o poster de volta com opacidade 0.5 ou 1
    });
  });
});


//menu-h
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const asideMobile = document.querySelector('.aside-mobile');
  const transparente = document.querySelector('.transparente');

  menuToggle.addEventListener('click', function() {
      asideMobile.classList.toggle('active'); 
      transparente.classList.toggle('active'); 
  });

  // Se clicar no fundo transparente, fechar o menu
  transparente.addEventListener('click', function() {
      asideMobile.classList.remove('active');
      transparente.classList.remove('active');
  });
});





