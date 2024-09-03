//

let contadora = 1
let numero
do {
    numero = parseInt(prompt("Digite um número para ver os pares entre 1 e seu número:"))
    if (isNaN(numero) || numero < 0) {
        alert("Número inválido, digite um valor positivo e maior que 0")
    }
} while (isNaN(numero) || numero < 0);

while (contadora != numero) {
    if (contadora%2 == 0){
        document.write(`${contadora} \t`)
    }
    contadora++
}