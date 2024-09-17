//Faça um algoritmo para determinar o consumo médio de um altomóvel sendo fornecido a distância total percorrida pelo automóvel e o total de combustível gasto.

//1º -> Entrada de dados
let dist, gasto
let consumo
//Float -> Permite casas decimais | Int -> Apenas números inteiros
dist = parseFloat(prompt("Digite a distância percorrida pelo seu carro em quilômetros"))
gasto = parseFloat(prompt("Digite a quantidade de combustível gasto nesse percurso em litros"))

//2º -> Processamento
consumo = dist / gasto

//3º -> Saída de dados
document.write(`O consumo médio do seu carro é de ${consumo.toFixed(2)} km/l`)