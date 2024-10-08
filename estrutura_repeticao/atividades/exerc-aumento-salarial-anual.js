let salario, novoSalario, anoAtual, percentual

salario = Number(prompt("Digite o salário:"))
anoAtual = Number(prompt("Digite o ano atual:"))

document.write(`<h3>Salário 2005: ${salario}</h3>`)

//processamento
percentual = 0.15
novoSalario = salario + (percentual * salario)
document.write(`<h3>Salário 2006: ${salario}</h3>`)

for (let i = 2007; i <= anoAtual; i++) {
    percentual = percentual * 2
    novoSalario = novoSalario + (percentual * novoSalario)
    document.write(`<h3>Salário ${i}: ${novoSalario.toFixed(2)}</h3>`)
}

document.write(`<h3 class=sfinal>Salário final: ${novoSalario.toFixed(2)}</h3>`)