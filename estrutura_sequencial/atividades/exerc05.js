//Faça um algoritmo que receba três notas, calcule e mostre a média aritmética entre elas(mostrar à média).

//1º -> Entrada de dados
let nome
let nota1, nota2, nota3, soma
let media
//Float -> Permite casas decimais | Int -> Apenas números inteiros
nome = prompt("Digite o seu nome")
nota1 = parseFloat(prompt("Digite a nota 1"))
nota2 = parseFloat(prompt("Digite a nota 2"))
nota3 = parseFloat(prompt("Digite a nota 3"))

//2º Processamento
soma = nota1 + nota2 + nota3
media = soma / 3

//3º Saída de dados
document.write(`${nome} a sua média é: ${media.toFixed(1)}`)