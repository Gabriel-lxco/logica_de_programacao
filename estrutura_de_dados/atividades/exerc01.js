let n,
numeros = [];

n = Number(prompt("Digite a quantidade de números"))
if(n < 0 || isNaN(n)){
    alert("Número inválido")
}

for(let i = 0; i < n; i++){
    numeros[i] = Number(prompt("Digite o número"))
}

document.write(`Vetor: ${numeros}`)

// 0:4, 1:5, 2:6, 3:7 -> length = 4
for(let i = numeros.length - 1; i >= 0; i--){
    document.write(`<p> ${numeros[i]} <p>`)
}