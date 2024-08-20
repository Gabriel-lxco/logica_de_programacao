let numero1, numero2

numero1 = parseFloat(prompt("Digite um número"))

numero2 = parseFloat(prompt("Digite outro número"))

if (numero1 > numero2) {
    document.write(`O maior número é ${numero1}`)
} else {
    document.write(`O maior número é ${numero2}`)
}