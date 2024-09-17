//Faça um algoritmo para mostrar a divisão de 2 números.

//1º -> Entrada de dados.
let num1, num2
let div
//Float -> Permite casas decimais | Int -> Apenas números inteiros
num1 = parseFloat(prompt("Digite o primeiro número"))
num2 = parseFloat(prompt("Digite o segundo número"))

//2º -> Processamento
div = num1 / num2

//3º -> Saída de dados
document.write(`${num1} / ${num2} = ${div}`)