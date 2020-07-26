function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()

    hora = 1
    //CONCORDÂNCIA DA MSG
    if (hora > 1) { //Hora no plural + chances
        msg.innerHTML = `Agora são ${hora} horas.`
    } else { //Hora no singular --> 00 e 01
        msg.innerHTML = `Agora é ${hora} hora.`
    }

     //FOTO
     if (hora < 12) {
        //BOM DIA!
        img.src = "manha.jpg"
        document.body.style.background = 'rgb(254, 228, 79)'
    } else if (hora < 18) {
        //BOA TARDE!
        img.src = "tarde.jpg"
        document.body.style.backgroung = 'rgb(137, 162, 184)'
    } else {
        //BOA NOITE!!
        img.src = "noite.jpg"
        document.body.style.background = 'rgb(127, 79, 101)'
    }



}