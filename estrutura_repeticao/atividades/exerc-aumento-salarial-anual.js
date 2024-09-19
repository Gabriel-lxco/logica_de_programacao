let salario = 1000, aumento, porcentagem = 0.015, ano = 2005

for(let i = 1; i < 21; i++){
    document.write(`O seu salário no ano de ${ano} é de R$${salario.toFixed(2)}<br>`)
    salario = 1000
    aumento = salario * porcentagem
    salario = salario + aumento
    ano++
    porcentagem = porcentagem * 2
}