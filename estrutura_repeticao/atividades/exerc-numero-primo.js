/*let numero, contadora = 0

numero = parseInt(prompt("Digite um número: "))

for (let i = numero; i != 0; i--) {
    if (numero % i == 0) {
        contadora++
    }
}
if (contadora == 2) {
    document.write(`O seu número é primo`)
} else {
    document.write(`O seu número não é primo`)
}*/


//correção---->
let numero, contador = 0

do {
    numero = parseInt(prompt("Digite um número para saber se ele é primo"))
    if (numero <= 0 || isNaN(numero)) {
        alert("Digite um número inteiro e maior que 0")
    }
} while (numero <= 0 || isNaN(numero));
//essa estutura vai repetir de 1 até o número que o usuário digitar

for (let i = 1; i <= numero; i++) {
    document.write(`${numero}%${i} = ${numero % i} <br>`)
    //número que o usuário digitou dividido pelo valor de i
    if (numero % i === 0) {
        contador++//vai receber 1 a cada divisão com o resto 0
    }
}
//fim da estrutura que vai repetir de 1 até o número que o usuário digitar

if (contador === 2) {
    document.write(`O seu número é primo`)
} else {
    document.write(`O seu número não é primo`)
}