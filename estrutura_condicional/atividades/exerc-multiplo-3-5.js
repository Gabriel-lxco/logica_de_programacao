let numero

numero = parseFloat(prompt("Digite um número: "))

if (numero % 5 != 0 && numero % 3 != 0) {
    document.write(`O seu número não é mútiplo de 3 ou 5`)
} else {
    if (numero % 5 == 0) {
        document.write(`O seu número é mútiplo de 5`)
    } else {
        document.write(`O seu número é multiplo de 3`)
    }
}