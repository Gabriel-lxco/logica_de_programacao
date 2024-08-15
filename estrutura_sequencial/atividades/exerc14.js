let nome, salario, totalV, comissao, final

nome = prompt("Qual é o seu nome?")
totalV = parseFloat(prompt("Quantos reais em vendas você fez nesse mês?"))

comissao = totalV * 0.15
final = salario + comissao

document.write(`${nome}, o seu salário após a comissão de suas vendas é de R$${final}`)
