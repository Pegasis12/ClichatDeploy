//menu header para ativar o after do a ao ser clicado
const links = document.querySelectorAll(".header li a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  // metodo includes verifica se tem uma parte doq esta escrito no texto dentro de outro texto
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

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