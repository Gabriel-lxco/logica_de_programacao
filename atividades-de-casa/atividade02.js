//  Escreva um algoritmo que solicite ao usuário a entrada das respostas corretas para 10 questões de uma prova. Em seguida, o algoritmo deve pedir o número e as respostas de 10 alunos para essas mesmas 10 questões. O programa deve comparar as respostas de cada aluno com o gabarito e exibir a nota de cada um. Ao final, o programa deve mostrar o percentual de alunos aprovados (aqueles que acertaram 6 ou mais questões).

let gabarito = [];
let notas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 10; i++) {
    gabarito[i] = prompt("Qual é a resposta correta da questão " + (i + 1) + "?");
}

for (let i = 1; i <= 10; i++) {
    let acertos = 0;
    for (let j = 0; j < 10; j++) {
        let respostaAluno = prompt("Aluno " + i + ", qual a sua resposta para a questão " + (j + 1) + "?");
        if (respostaAluno === gabarito[j]) {
            acertos++;
        }
    }
    notas[i - 1] = acertos;
    document.write("Aluno " + i + ": " + acertos + " acertos<br>");
}

let aprovados = 0;
for (let i = 0; i < 10; i++) {
    if (notas[i] >= 6) {
        aprovados++;
    }
}

let percentualAprovados = (aprovados / 10) * 100;

document.write("Percentual de aprovação: " + percentualAprovados.toFixed(2) + "%<br>");
