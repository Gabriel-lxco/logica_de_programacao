let hb, hf, fuso = 5

hb = parseInt(prompt("Digite o horário atual do Brasil"))

hf = hb + fuso

if (hf > 23) {
   if (hf > 28) {
    document.write(`O horário informado está inválido!`)
   } else {
    hf = hf - 24
    document.write(`De acordo com o horário atual do Brasil, o horário na França é igual à: ${hf}`)
   }
} else {
    document.write(`De acordo com o horário atual do Brasil, o horário na França é igual à: ${hf}`)
}