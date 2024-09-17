let cotacao, real, conversao

cotacao = parseFloat(prompt("Qual e a cotacao atual do dolar?"))
real = parseFloat(prompt("Digite o valor disponivel em reais que voce possui"))

conversao = real/cotacao

document.write(`R$ ${real.toFixed(2)} convertido para dólar equivale a U$ ${conversao.toFixed(2)}`)