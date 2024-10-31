let vetor1 = [], vetor2 = []
vetor3 = []
let j = 0

for(let i = 0; i < 5; i++){
    vetor1[i] = Math.floor(Math.random() * 10)
    vetor2[i] = Math.floor(Math.random() * 10)
    vetor3[j] = vetor1[i]
    j++
    vetor3[j] = vetor2[i]
    j++
}

document.write(`Vetor 1: ${vetor1}<br>`)
document.write(`Vetor 2: ${vetor2}<br>`)
document.write(`Vetor 3: ${vetor3}`)