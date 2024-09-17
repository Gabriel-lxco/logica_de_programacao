/*let numero, soma = 0

numero = parseInt(prompt("Digite um número: "))

for (let i = 0; i != numero; i++) {
    if (numero % i == 0) {
        soma = soma + i
    }
}
if (soma == numero) {
    document.write(`O número ${numero} é perfeito.`)
} else {
    document.write(`O número ${numero} não é perfeito.`)
}*/


//correção---->
let numero, numPerfeito = 0
// 6-> 6/1 = 0 | 6/2 = 0 | 6/3 = 0 | 6/4 = N | 6/5 = N | 6/6 = 0

do {
    debugger
    numero = parseInt(prompt("Digite um número para saber se ele é perfeito"))
    if (numero <= 0 || isNaN(numero)) {
        alert("Número digitado inválido")
    }
} while (numero <= 0 || isNaN(numero));

for ( let i = 1; i < numero; i++){
    if (numero % i === 0) {
        numPerfeito = numPerfeito + i
    }
}

if (numPerfeito === numero) {
    document.write(`O número ${numero} é um número perfeito`)
} else{
    document.write(`O número ${numero} não é um número perfeito`)
}