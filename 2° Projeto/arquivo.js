const form = document.getElementById('form-list')
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado"/>'

let linhas = ''

form.addEventListener('submit', enviar)

function enviar(e) {
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()
}

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>`

    linhas += linha

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}