const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: false
})

scrollReveal.reveal(
  `.cabecalho .bloco-perfil, .sobre-mim .sobre-mim-texto, .titulo-secao, .formacao ul li, .projetos .card, .skills ul li, .contato .redes-sociais, .form `,
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
