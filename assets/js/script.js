// SCROLLREVEAL DA PÁGINA
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: false
})

scrollReveal.reveal(
  `.cabecalho .bloco-perfil, .sobre-mim .sobre-mim-texto, .botoes-principais, .titulo-secao, .formacao ul li, .projetos .card, .skills ul li, .contato .redes-sociais, .form `,
  {
    interval: 100
  }
)

scrollReveal.reveal(` .titulo-secao, .contato .email-button, .rodape p `, {
  origin: 'left'
})

// mudar a página para Claro/Escuro

function modoClaroEscuro() {
  document.body.classList.toggle('temaEscuro')
}

/* Botão voltar para o topo*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 100) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
})
