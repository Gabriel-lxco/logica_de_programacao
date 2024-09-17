// Elabore um programa que ilustra a montagem de uma estrutura de repetição decrescente, com o valor inicial informado pelo úsuário até o número 1

let numero = Number(prompt("Digite um número para uma ordem decrescente: "))

for (let i = numero; i != 0; i--) {
    document.write(`${i} \t`);
}