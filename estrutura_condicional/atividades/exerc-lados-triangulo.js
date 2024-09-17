let lado1, lado2, lado3

lado1 = parseFloat(prompt("Digite a medida do primero lado do seu triângulo"))
lado2 = parseFloat(prompt("Digite a medida do segundo lado do seu triângulo"))
lado3 = parseFloat(prompt("Digite a medida do terceiro lado do seu triângulo"))

if (((lado1+lado2) > lado3) && ((lado1+lado3) > lado2) && ((lado2+lado3) > lado1)) {
    document.write(`O seu triângulo é válido`)
} else {
    document.write(`O seu triângulo é inválido`)
}