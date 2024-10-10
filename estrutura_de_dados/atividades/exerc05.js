let n = []; n2 = []

for(let i = 0; i < 8; i++){
    n[i] = Number(prompt("Digite um número"))
    n2[i] = n[i] * (-1)
}

document.write(n + "<br>")
document.write(n2 + "<br>")