//Faça um agoritmo para mostrar o resultado da soma de 2 números.

//1° -> Entrada de dados
let num1, num2
let soma
//Float -> Permite casas decimais | Int -> Apenas números inteiros
num1 = parseFloat(prompt("Digite o primeiro número"))
num2 = parseFloat(prompt("Digite o segundo número"))  

//2º -> Processamento
soma = num1 + num2

//3º -> Saída de dados -> Concatenação
document.write(`${num1} + ${num2} = ${soma}`)