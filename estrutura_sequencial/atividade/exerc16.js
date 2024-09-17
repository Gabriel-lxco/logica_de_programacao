let salarioB, salarioR, gratificacao = 0.05, imposto = 0.07

salarioB = parseFloat(prompt("Qual é o seu salário?"))

salarioR = salarioB + (salarioB * gratificacao)
salarioR = salarioR - (salarioR * imposto)

document.write(`O seu salário a receber é de R$ ${salarioR.toFixed(2)} após a gratificação de 5% e ao pagar os impostos de 7% para o goverdo do tio LULU, faz o L graças ao taxadd!`)