//
let numero, contadora = 0

numero = parseInt(prompt("Digite um número: "))

for (let i = numero; i != 0; i--) {
    if (numero % i == 0) {
        contadora++
    }
}
if (contadora == 2) {
    document.write(`O seu número é primo`)
} else {
    document.write(`O seu número não é primo`)
}