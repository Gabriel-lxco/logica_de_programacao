// Escreva um algoritmo que solicite ao usuário a entrada de 10 números e armazene-os em um vetor. O programa deve, então, exibir o vetor com os números na ordem inserida. Em seguida, o algoritmo deve ordenar o vetor em ordem decrescente e exibir o vetor ordenado.

let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Digite um número:")) 
}

document.write(`Os números foram: ${numeros}`);

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] < numeros[j + 1]) {
            let aux = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = aux;
        }
    }
}

document.write(`<br>Os números em ordem decrescente: ${numeros} `);
