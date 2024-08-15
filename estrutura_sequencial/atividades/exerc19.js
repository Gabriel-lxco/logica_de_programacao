let modelo, preco, valorEN, saldo

modelo = prompt("Qual o modelo do carro? ")
preco = parseFloat(prompt("Digirte o valor do mesmo: "))

valorEN = preco*0.5
saldo = preco - valorEN
saldo = saldo/12

document.write(`O ${modelo} deverá pagar uma entrada de ${valorEN}(50%) e o seu saldo será de ${saldo.toFixed(2)}`)