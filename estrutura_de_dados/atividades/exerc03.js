let acumuladora = 0,
num = [];

for(let i = 0; i < 10; i++){
    num[i] = Number(prompt("Digite um número"))
    acumuladora = num[i] * 5
    document.write(`${acumuladora},\t`)
}

document.write(`<p>${num}`)