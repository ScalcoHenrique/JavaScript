var agora = new Date().getHours()

if (agora == 1) {
    var hora = "hora"
} else {
    var hora = "horas"
}
//Apresenteção
console.log(`Agora são ${agora} ${hora}`)
if (agora < 6) {
    console.log("Boa madrugada!")
} else if (agora < 12) {
    console.log("Bom dia!")
} else if (agora < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}