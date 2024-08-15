//Faça um algoritmo que receba dois números e no final mostre a soma, subtração, multiplicação e divisão dos números.

//1º -> Entrada de dados
let num1, num2
let soma, sub, multi, div
//Float -> Permite casas decimais | Int -> Apenas números inteiros
num1 = parseFloat(prompt("Digite o primeiro número"))
num2 = parseFloat(prompt("Digite o segundo número"))

//2º -> Processamento
soma = num1 + num2
sub = num1 - num2
multi = num1 * num2
div = num1 / num2

//3º -> Saída de dados
document.write(`${num1} + ${num2} = ${soma} <br>`)
document.write(`${num1} - ${num2} = ${sub} <br>`)
document.write(`${num1} * ${num2} = ${multi} <br>`)
document.write(`${num1} / ${num2} = ${div} <br>`)