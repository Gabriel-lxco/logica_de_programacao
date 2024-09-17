let preco, parcela

preco = parseFloat(prompt("Qual o preço do produto que deseja comprar?"))

parcela = preco/5

document.write(`O valor das parcelas será de R$ ${parcela.toFixed(2)}`)