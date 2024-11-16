// Escreva um algoritmo que solicite ao usuário a entrada do nome, salário e tempo de serviço (em anos) de 3 funcionários. O programa deve então verificar as condições para aumento de salário: Funcionários com tempo de serviço maior que 5 anos ou com salário abaixo de 400 devem receber um aumento.Se o tempo de serviço for maior que 5 anos e o salário for menor que 400, o aumento será de 35% sobre o salário.Se apenas o tempo de serviço for maior que 5 anos, o aumento será de 25%.Se apenas o salário for menor que 400, o aumento será de 25%.O programa deve exibir o novo salário para cada funcionário que recebeu aumento. Caso o funcionário não se enquadre nas condições de aumento, o programa deve exibir uma mensagem informando que ele não receberá aumento.

for (let i = 1; i <= 3; i++) {
    let nome = prompt("Digite o nome do funcionário " + i + ":");
    let salario = parseFloat(prompt("Digite o salário do funcionário " + i + ":"));
    let tempoServico = parseInt(prompt("Digite o tempo de serviço do funcionário " + i + " (em anos):"));

    if (tempoServico > 5 && salario < 400) {
        salario += salario * 0.35;
        document.write("Funcionário " + nome + ": Novo salário = " + salario.toFixed(2) + " (aumento de 35%)<br>");
    } else if (tempoServico > 5) {
        salario += salario * 0.25;
        document.write("Funcionário " + nome + ": Novo salário = " + salario.toFixed(2) + " (aumento de 25%)<br>");
    } else if (salario < 400) {
        salario += salario * 0.25;
        document.write("Funcionário " + nome + ": Novo salário = " + salario.toFixed(2) + " (aumento de 25%)<br>");
    } else {
        document.write("Funcionário " + nome + ": Não receberá aumento.<br>");
    }
}