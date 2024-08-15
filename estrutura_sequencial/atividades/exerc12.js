let produto, venda, percentual, decimalpercentual

produto = parseFloat(prompt("Qual o valor do produto que deseja vender?"))
percentual = parseFloat(prompt("Digite o percentual que deseja adicionar ao produto na hora de vende-lo"))

decimalpercentual = percentual / 100
venda = produto + (produto * decimalpercentual)

document.write(`Esse produto deve ser vendido por R$ ${venda.toFixed(2)}`)