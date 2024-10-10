let v1 = [], v2 = []
v3 = []

for(let i = 0; i < 5; i++){
    v1[i] = Number(prompt("DIgite um número para o primeiro vetor:"))
    v2[i] = Number(prompt("Digite um número para o segundo vetor:"))
    v3[i] = v1[i] + "," + v2[i]
}

document.write(`Vetor 1: ${v1}<br>`)
document.write(`Vetor 2: ${v2}<br>`)
document.write(`Vetor 3: ${v3}`)