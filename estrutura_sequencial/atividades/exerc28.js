let hb, hf, fuso = 5, horas

hb = parseInt(prompt("Digite o horário atual do Brasil"))

hf = hb + fuso

if (hf > 23) {
    hf = hf - 24
    document.write(`De acordo com o horário atual do Brasil, o horário na França é igual à: ${hf}`)
} else {
    document.write(`De acordo com o horário atual do Brasil, o horário na França é igual à: ${hf}`)
}