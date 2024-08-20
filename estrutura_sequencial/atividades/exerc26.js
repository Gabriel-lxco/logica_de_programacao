let lado1, lado2, lado3, media

lado1 = parseFloat(prompt("Digite a medida do primero lado do seu triângulo"))
lado2 = parseFloat(prompt("Digite a medida do segundo lado do seu triângulo"))
lado3 = parseFloat(prompt("Digite a medida do terceiro lado do seu triângulo"))

media = lado1+lado2

if (media > lado3) {
    document.write(`O seu triângulo é válido`)
} else {
    document.write(`O seu triângulo é inválido, já que seu 3º lado é maior que o 1º e o 2º lado somados`)
}