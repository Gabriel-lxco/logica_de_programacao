//Faça um algoritmo que monte os oitos primeiros números termos da sequência de Fibonacci.

let num1, num2, num3

do {
    num1 = parseInt(prompt("Digite o 1º número da sequência número: "))
    if((num1 <= 0) || (isNaN(num1))){
        alert("São lidos apenas valores inteiros e positivos!!")
    }
} while ((num1 <= 0) || (isNaN(num1)));
do {
    num2 = parseInt(prompt("Digite o 2º número da sequência número: "))
    if((num2 <= 0) || (isNaN(num2))){
        alert("São lidos apenas valores inteiros e positivos!!")
    }
} while ((num2 <= 0) || (isNaN(num2)));
do {
    num3 = parseInt(prompt("Digite o 3º número da sequência número: "))
    if((num3 <= 0) || (isNaN(num3))){
        alert("São lidos apenas valores inteiros e positivos!!")
    }
} while ((num3 <= 0) || (isNaN(num3)));

for (let i = 0; i < 5; i++) {
    document.write(`${num1}, ${num2}, ${num3}, `)
    num1 = num1 * 2
    num2 = num2 * 3
    num3 = num3 * 4
}