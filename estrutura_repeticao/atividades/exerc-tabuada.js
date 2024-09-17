// Construir uma tabuada com estrutura de 

let numero = Number(prompt("Digite um número para tabuada: "))
debugger;
for (let i = 1; i <= 10; i++){
    document.write(`${numero} x ${i} = ${numero*i} <br>`)
}