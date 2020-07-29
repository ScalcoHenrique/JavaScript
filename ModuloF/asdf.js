let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
console.log(num);

num[3] = 6 //Adicionei o valor 6 no elemento 3 do vetor. Se add em índice > último, cria os espaços vazios com valor 'undefined'
console.log(num[3]);

num.push(7) //Adiciona após o último índice o valor do parâmetro
console.log(num);

console.log(num.length); //NÃO TEM PARÊNTESES, POIS É ATRIBUTO!

num.sort() //Método que ordena crescentemente os elementos do vetor

//PERCURSO DO VETOR!! O segundo parâmetro deve ser apenas < length, pq vai incrementar e fazer um a mais do que o tamanho

for (posicao = 0; posicao < num.length; posicao++) {
    console.log(`O ${posicao + 1}º elemento do vetor "num" tem o valor ${num[posicao]}`);
}
*/
//A PARTIR DO ECMASCRIPT 5:
for (let pos in valores) {
    console.log(`O ${pos}º elemento do vetor "num" tem o valor ${valores[pos]}`);
}


//Buscar valores: vetor.indexOf(parametro)


