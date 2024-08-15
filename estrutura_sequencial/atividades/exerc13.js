let salario, aumento = 0.25

salario = parseFloat(prompt("Qual o valor do seu salário?"))

salario = salario + (salario*aumento)

document.write(`O seu novo salário após o aumento de 25% é de R$ ${salario.toFixed(2)}`)