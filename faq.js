// BUSCAR ELEMENTOS NA TELA
const itensPerguntasERespostas = document.querySelectorAll('.item')

// ITEN FOI CLICKADO?
itensPerguntasERespostas.forEach(function (item) {
  item.addEventListener('click', function () {
    // VERIFICAR SE O ELEMENTO ESTA ATIVO
    const estaAtiva = item.classList.contains('ativo')

    // FECHAR OUTROS ELEMENTOS
    itensPerguntasERespostas.forEach(function (item) {
      item.classList.remove('ativo')
    })

    // SE O ELEMENTO (PERGUNTA) NAO ESTIVER ATIVO
    if (!estaAtiva) {
      // ABRIR ELEMENTO (RESPOSTA) ATUAL.
      item.classList.add('ativo')

      // SE O ELEMENTO (PERGUNTA) ESTIVER ATIVO
    } else {
      // DESATIVAR ELEMENTO, ou seja REMOVERIA A CLASSE ATIVO
      item.classList.remove('ativo')
    }
  })
})
