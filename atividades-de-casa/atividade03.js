// Escreva um algoritmo que solicite ao usuário a entrada do modelo de 5 veículos. Em seguida, para cada veículo, solicite o consumo de combustível (em km por litro). O programa deve calcular e exibir a quantidade de combustível necessária para cada veículo percorrer 1000 km. Ao final, o algoritmo deve identificar e exibir o veículo com o menor consumo de combustível (o mais econômico) entre os informados.

let modelos = [];
let consumos = [];

for (let i = 1; i <= 5; i++) {
    modelos[i - 1] = prompt("Digite o modelo do veículo " + i + ":");
    consumos[i - 1] = parseFloat(prompt("Digite o consumo de combustível do veículo " + i + " (em km por litro):"));
}

for (let i = 0; i < modelos.length; i++) {
    let combustivelNecessario = 1000 / consumos[i];
    document.write("Veículo " + modelos[i] + ": " + combustivelNecessario.toFixed(2) + " litros<br>");
}

let indiceMaisEconomico = 0;
for (let i = 1; i < consumos.length; i++) {
    if (consumos[i] > consumos[indiceMaisEconomico]) {
        indiceMaisEconomico = i;
    }
}

document.write("Veículo mais econômico: " + modelos[indiceMaisEconomico] + " com consumo de " + consumos[indiceMaisEconomico] + " km por litro.");
