//Coleta de dados
var num = document.getElementById('txtnum')
var sel = document.getElementById('selnum')
var res = document.getElementById('res')
var lista = []

function adicionar() {
    var n = Number(num.value)
    if (num.value < 1 || num.value > 100 | num.value.length == 0 | lista.indexOf(n) >= 0) {
        window.alert('Valor inválido ou já adicinado na lista')
    } else {
        //Adicionando o valor digitado no vetor
        lista.push(n)
        //Criação do elemento option dentro do select
        let item = document.createElement('option')
        //Definição do conteúdo
        item.text = `O valor ${n} foi adicionado`
        //Definindo o value do option acima
        item.value = n
        //Exibição do resultado dentro do select
        sel.appendChild(item)
    }
    num.value = ''
    res.innerHTML = ""
    //Foco no input:
    num.focus()

}


function finalizar() {
    if (lista.length == 0) {
        window.alert("Nenhum valor foi adicionado!")
    } else {
        var maior = lista[0]
        var menor = lista[0]
        var soma = 0

        for (let cont = 0; cont < lista.length; cont++) {
            if (lista[cont] > maior) {
                maior = lista[cont]
            }
            if (lista[cont] < menor) {
                menor = lista[cont]
            }
            soma += lista[cont]
        }
    }

    //Exibição dos valores:
    res.innerHTML = `<p>Ao todo temos ${lista.length} número(s) cadastrado(s)</p>
    <p>O maior valor informado foi ${maior}</p>
    <p>O menor valor informado foi ${menor}</p>
    <p>Somando todos os valores cadastrados, temos ${soma}</p>
    <p>A média dos valores digitados é ${(soma / lista.length)}</p>`
}

//Inclusão do botão ZERAR
function zerar() {
    lista = []
    res.innerHTML = ""
    let asdfrr = document.removeChild
}