let dolar, real = 5.47

dolar = parseFloat(prompt("Digite um valor em U$ para ser transferido em R$: "))

real = real*dolar

document.write(`Sua quantia digitada transferida para real é igual a: R$ ${real.toFixed(2)}`)