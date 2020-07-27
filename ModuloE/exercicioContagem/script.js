function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    //Validação dos campos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Verifique os campos e tente novamente.')
    } else { //Continuação do programa
        cont = Number(ini.value)
        qtde = Number(fim.value)
        passo = Number(passo.value)
        //Validação do passo
        if (passo == 0) {
            window.alert('Impossível contar com passo 0. Faremos a contagem com passo 1.')
            passo = 1
        }

        //Variavel de resultado
        var txt = 'Contando:<br>'

        //Contagem progressiva
        if (cont <= qtde) {
            for (c = cont; c <= qtde; c += passo) {
                txt += `${c} \u{1F449}`
            }
        } else { //Contagem regressiva
            for (c = cont; c >= qtde; c -= passo) {
                txt += `${c} \u{1F449}`
            }
        }

        //EXIBIÇÃO DOS EMOJIS: unicode emoji list --> Tem que ser entre CRASE --> trocar U+ por \u{CÓDIGO}


        //Exibição do resultado
        res.innerHTML = txt + `\u{1F3C1}`
    }

}

