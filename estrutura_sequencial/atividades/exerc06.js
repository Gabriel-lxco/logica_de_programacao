//Faça um algoritmo para ler duas variáveis A e B, e efetuar as trocas dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresenta na tela os dois valores na tela os dois valores trocados (antes AB, depois AB).

//1º -> Entrada de dados
let A, B
let X

A = parseInt(prompt("Digite o valor de A"))
B = parseInt(prompt("Digite o valor de B"))

document.write(`A variável A = ${A}; e a variável B = ${B} <br>`)

X = A
A = B
B = X

document.write(`A variável A = ${A}; e a variável B = ${B}`)