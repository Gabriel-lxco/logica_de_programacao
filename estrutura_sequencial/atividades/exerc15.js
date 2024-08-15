let salario, aumento, final

salario = parseFloat(prompt("Qual é o seu salário?"))
aumento = parseInt(prompt("Você recebeu quantos porcento de aumento?"))

final = salario + ((salario*aumento)/100)

document.write(`Seu salário após o aumento de ${aumento}% é de R$ ${final.toFixed(2)}`)