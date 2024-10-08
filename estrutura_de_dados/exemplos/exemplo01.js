let tempAnual = [], mediaTemp = 0, acumuladora = 0

//1º - Armazenar dados na estrutura de dados -> ARRAY (VETOR)
for(let i = 0; i < 12; i++){
    tempAnual[i] = Number(prompt("Digite a temperatura do mês"))
}

//2º - Mostrar/processar os valores do array de forma individual
for(let i = 0; i< 12; i++){
    acumuladora = acumuladora + tempAnual[i]
}

mediaTemp = acumuladora / 12
console.log(typeof acumuladora) //objeto
console.log(typeof 12) //number
console.log(mediaTemp)
document.write(`<p> tempAnual: ${tempAnual}<p>`)
document.write(`<p>Média da tempAnual: ${mediaTemp}<p>`)