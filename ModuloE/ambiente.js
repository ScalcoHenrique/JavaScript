var cont = 0
var qtde = 10

//Estrutura de repetição com teste lógico no INÍCIO
while (cont <= qtde) {
    console.log(`While --> Passo ${cont}`)
    cont++
}

//Estrutura de repetição com teste lógico no FINAL
cont = 0
do {
    console.log(`Do/While --> Passo ${cont}`)
    cont++
} while (cont <= qtde);

//Estrutura de repetição com variável de controle --> Início, teste lógico e incremento
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Passo ${element}`);
}
