const toggleBtn = document.querySelector('#toggle-mode')
const body = document.body

toggleBtn.addEventListener("click", function () {
    body.classList.toggle('dark-mode')
})

function gerarTabuada() {
    var numero = parseInt(document.getElementById('numero').value)
    var tabela = document.getElementById('tabela-tabuada')

    tabela.innerHTML = ""

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i
        var linha = "<tr><td>" + numero + " X " + i + "</tr><td>" + resultado + "</tr></td>"

        tabela.innerHTML += linha
    }
}
