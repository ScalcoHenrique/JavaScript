function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    //Validação de campo preenchido
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else { //conversão da variável num para Number
        let n = Number(num.value)
        //Limpar o campo select para cada vez que a função é acionada:
        tab.innerHTML = ""
        //Laço de repetição para a tabuada (Vídeo ensina pelo while para variação)
        for (c = 0; c <= 10; c++) {
            //criação dos options dentro do select
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            //Adicionando o parâmetro value dentro do option:
            item.value = `tab${c}`
            //Exibir resultados dentro do select:
            tab.appendChild(item)
        }
    }
}