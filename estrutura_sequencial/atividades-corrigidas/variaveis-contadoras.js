//vairiaveis contadoras,  acumuladoras = iniciadas com o valor 0
//1º variavel++, variavel--
//2ª variavel = variavel + acumular
let nomeConta, valorConta
let qtdConta = 0, valorTotal = 0
let i = 1

//temos que tratar as variáveis, pois podem vir valores inesperados
while(i !== 0){

    do {
    nomeConta = prompt("Qual conta irá pagar?")
        if (nomeConta === '') {
            alert("A conta precisa de um descrição")
        }
    } while(nomeConta === '');

    do {
     valorConta = parseInt(prompt(`Digite o valor da conta ${nomeConta}: `));
     if (valorConta ===0 || isNaN(valorConta)) {
        alert("O valor da conta precisa ser números")
     }   
    } while (valorConta === 0 || isNaN(valorConta));

    qtdConta++
    valorTotal = valorTotal + valorConta

    document.write(`<h4>${nomeConta} \t\t --------- \t\t ${valorConta}</h4>`)
    i = parseInt(prompt("Digite 1 para continuar cadastrado e 0 para sair"))

}
document.write(`<h3>Quantidade de contas: ${qtdConta} -------- ${valorTotal}</h3>`)