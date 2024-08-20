let nota1, nota2, nota3, media

nota1 = parseFloat(prompt("Digite sua primeira nota: "))
nota2 = parseFloat(prompt("Digite sua segunda nota: "))
nota3 = parseFloat(prompt("Digite sua terceita nota: "))

media = (nota1+nota2+nota3) / 3

if ((((nota1 || nota2 || nota3) >= 0) && ((nota1 || nota2 || nota3) <= 10))) {
    if (media >= 7) {
        document.write(`Você foi aprovado, e sua média foi de: ${media}`)
    } else {
        document.write(`Você foi reprovado, e sua média foi de: ${media}`)
    }    
} else {
    document.write(`Alguma de suas notas estão incorretas`)
}