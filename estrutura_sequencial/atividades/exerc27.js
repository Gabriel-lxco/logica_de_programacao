let ano, resto

ano = parseFloat(prompt("Digite qualquer ano para saber se ele é bissexto ou não: "))

resto = ano%4

if (resto == 0) {
    document.write(`${ano} é um ano bissexto!`)
} else {
    document.write(`${ano} não é um ano bissexto!`)
}