/*  Elabore um programa que leia um número N  e indique quantos valores inteiros e positivos devem ser lidos a seguir. para cada número lido, mostre o valor lido e o fatorial desse valor. */
/*let qtd, numero, fat, num

qtd = parseInt(prompt("Quantos números deseja descobrir o fatorial?"))

for (let i = 0; i < qtd; i++){
    numero = parseInt(prompt("Digite o número que você deseja saber o fatorial: "))
    fat = (numero - 1)
    num = numero
    while(fat != 0){
        numero = numero * fat
        fat--
    }
    document.write(`O número <strong>${num}</strong> possui um fatorial de: <strong>${numero}</strong><br>`)
}*/

//correção---->
let qtdNumero, numeroEscolhido, fatorial 

do {
    qtdNumero = parseInt(prompt("Quantos fatoriais você deseja saber?"))
    if (qtdNumero <= 0 || isNaN(qtdNumero)) {
        alert("Número inválido")
    }
} while (qtdNumero <= 0 || isNaN(qtdNumero));

for (let i = 1; i <= qtdNumero; i++) {
    
    do {
        numeroEscolhido = parseInt(prompt(`Digite o ${i}º numero para saber o fatorial`));
        if (numeroEscolhido <= 0 || isNaN(numeroEscolhido)) {
            alert("Número inválido")
        }
    } while (numeroEscolhido <= 0 || isNaN(numeroEscolhido));

    fatorial = 1
    for (let y = 1; y <= numeroEscolhido; y++) {
        fatorial = fatorial * y
        
    }

    document.write(`Fatorial de  ${numeroEscolhido} é ${fatorial}<br>`)

}