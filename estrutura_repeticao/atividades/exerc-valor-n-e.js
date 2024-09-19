let numero, E = 1, fat = 1

do{
    numero = parseInt(prompt("Digite um número: "))
    if ((numero <= 0) || (isNaN(numero))) {
        alert("O número digitado deve ser inteiro e positivo!!")
    }
} while((numero <= 0) || (isNaN(numero)));

for(let y = 1; y <= numero; y++){
    fat = fat * y
    E = E + (1/fat)
}

document.write(`O valor de E é igual a ${E.toFixed(2)}`)