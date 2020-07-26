function verificar() {
    //Ano atual
    var ano = new Date().getFullYear()
    //Campo do formulário para validação de dados
    var fano = document.getElementById('txtAno')
    //Variável para mostrar resultado
    var res = document.querySelector('div#res')

    //Validação inicial do campo Ano --> vazio || inválido
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //Buscar os valores do input radiobutton
        var fsex = document.getElementsByName('radSexo')
        //Cálculo da idade com base no ano
        var idade = ano - Number(fano.value)
        //Armazenamento do gênero
        var genero = ''
        //Criação de imagem dinamicamente via JS
        //É possível formatar via CSS, passando os parâmetros criados
        var img = document.createElement('img') //Parâmetro é a tag HTML
        img.setAttribute('id', 'foto') //<img id="foto">
        
        //PRINCIPAL PARTE DA FUNÇÃO: Validação de sexo, idade e imagem
        if (fsex[0].checked) {
            genero = 'Homem'
            //Validação da Idade
            if (idade < 10) { //Já está travada a idade mínima = 0
                //Criança
                img.setAttribute('src', 'masculino_crianca.jpg') //<img src="NOME_DA_FOTO.EXTENÇÃO"
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'masculino_adolescente.jpg')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'masculino_adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'masculino_idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            //Validação da Idade
            if (idade < 10) { //Já está travada a idade mínima = 0
                //Criança
                img.setAttribute('src', 'feminino_crianca.jpg') //<img src="NOME_DA_FOTO.EXTENÇÃO"
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'feminino_adolescente.jpg')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'feminino_adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'feminino_idoso.jpg')
            }
        }
    }

    //Exibição dos resultados
    res.style.textAlign = 'center' //CSS dinâmico
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    //Exibição da img criada
    res.appendChild(img) //Parâmetro é a variável criada


}
