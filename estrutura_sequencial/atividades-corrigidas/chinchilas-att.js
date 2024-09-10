let qtdChinchilas, anosFazenda
let totalChinchilas = 1

do {
    qtdChinchilas = parseInt(prompt("Digite a quantidade de chinchilas"))
    if (qtdChinchilas < 2 || isNaN(qtdChinchilas)) {
        alert("Número de chinchilas deve ser maior ou igual a 2")
    }
} while (qtdChinchilas < 2 || isNaN(qtdChinchilas));

do {
    anosFazenda = parseInt(prompt("Digite quantos anos você irá criar chinchilas"))
    if (anosFazenda < 2 || isNaN(anosFazenda)) {
        alert("Tem de criação inválido")
    }
} while (anosFazenda < 2 || isNaN(anosFazenda));

document.write(`Quantidade chinchilas: ${qtdChinchilas}, e o tempo de criação é: ${anosFazenda}`)

totalChinchilas = qtdChinchilas

for (let i = 2; i < anosFazenda; i++) {
    totalChinchilas = totalChinchilas * 3
    document.write("<br>" + totalChinchilas)
}