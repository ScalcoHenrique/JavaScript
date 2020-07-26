var agora = new Date()
var diaSemana = agora.getDay() //Retorna valores de 0 a 6
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

var dia
switch (diaSemana) {
    case 0:
        dia = "Domingo"
        break;

    case 1:
        dia = "Segunda"
        break;

    case 2:
        dia = "Terça"
        break;

    case 3:
        dia = "Quarta"
        break;

    case 4:
        dia = "Quinta"
        break;

    case 5:
        dia = "Sexta"
        break;

    case 6:
        dia = "Sábado"
        break;

}
//diaSemana > 0 && diaSemana < 6
diaSemana = 0
if (0 < diaSemana > 6) {
    dia += "-feira"
}

console.log(`Olá! Hoje é ${dia}`)