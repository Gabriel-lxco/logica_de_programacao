let numero, soma = 0

numero = parseInt(prompt("Digite um número: "))

for (let i = 0; i != numero; i++) {
    if (numero % i == 0) {
        soma = soma + i
    }
}
if (soma == numero) {
    document.write(`O número ${numero} é perfeito.`)
} else {
    document.write(`O número ${numero} não é perfeito.`)
}