let qtd, numero, fat, num

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
}