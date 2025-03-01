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

// banner
function changeBanner(bannerId) {
  const banner = document.getElementById(bannerId);
  const images = banner.querySelectorAll('.banner-img');
  const dots = banner.querySelectorAll('.dot');
  let currentIndex = 0;

  setInterval(function() {
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }, 5000);
}

function currentSlide(index, bannerId) {
  const banner = document.getElementById(bannerId);
  const images = banner.querySelectorAll('.banner-img');
  const dots = banner.querySelectorAll('.dot');
  
  let currentIndex = Array.from(dots).findIndex(dot => dot.classList.contains('active'));

  images[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  
  currentIndex = index;
  images[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

// Iniciar a troca automática para cada banner
changeBanner('banner1');
changeBanner('banner2');


// troca imagem
// Função para trocar as imagens quando a tela for menor que 900px
function updateBannerImages() {
  const banners = document.querySelectorAll('.banner');

  banners.forEach(banner => {
    const images = banner.querySelectorAll('.banner-img');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 900) {
      // Troca as imagens para a versão mobile
      images[0].src = './img/fotos/banner-promo-mobile.png';
      images[1].src = './img/fotos/banner-promo2-mobile.png';
    } else {
      // Troca para as imagens padrão quando a tela for maior que 900px
      images[0].src = './img/fotos/banner-promo.png';
      images[1].src = './img/fotos/banner-promo2.png';
    }
  });
}

// Inicializa as trocas de imagens no carregamento da página
updateBannerImages();

// Atualiza as imagens sempre que o tamanho da janela mudar
window.addEventListener('resize', updateBannerImages);








