//menu header para ativar o after do a ao ser clicado
const links = document.querySelectorAll(".header li a");
const links2 = document.querySelectorAll(".header-menu-second li a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  // metodo includes verifica se tem uma parte doq esta escrito no texto dentro de outro texto
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

    container.addEventListener("mouseover", function () {
      poster.style.opacity = 0; // Some com o poster suavemente
      video.style.opacity = 1; // Aparece o vídeo
      video.play();
    });

    container.addEventListener("mouseleave", function () {
      video.pause();
      video.currentTime = 0; // Reseta o vídeo
      video.style.opacity = 0; // Some com o vídeo
      poster.style.opacity = 1; // Traz o poster de volta
    });
  });
});


//menu h
document.getElementById("menu-toggle").addEventListener("click", function(event) {
  event.preventDefault(); // Evita o comportamento padrão da âncora (navegar para outro lugar)
  
  // Verifica se a classe 'active' está presente
  const menu = document.querySelector(".aside-mobile");
  menu.classList.toggle("active"); // Alterna a classe 'active'
});

document.addEventListener("click", function(event) {
  const menu = document.querySelector(".aside-mobile");
  const menuToggle = document.getElementById("menu-toggle");

  // Verifica se o clique foi fora do menu ou do botão de menu
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active"); // Fecha o menu
    }
  }
});





