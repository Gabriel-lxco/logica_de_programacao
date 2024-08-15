let valor, rendimento, final
const juros = 0.0007

valor = parseFloat(prompt("Qual o valor que será depositado?"))

rendimento = valor * juros
final = valor + rendimento

document.write(`Após 1 mês, você terá um total de R$ ${final.toFixed(2)}`)