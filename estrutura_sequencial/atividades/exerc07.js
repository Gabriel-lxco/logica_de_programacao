//Faça um algoritmo para ler uma temperatura em graus Celcils e apresentá-la convertida em graus Fahrenheit.

let grausC, grausF

grausC = parseInt(prompt("Digite uma temperatura em °C"))

grausF = (grausC * 9) / 5 + 32

document.write(`A temperatura convertida para Fahrenheit é: ${grausF.toFixed(1)}°F`)