let acumuladora = 0,
num = [];

for(let i = 0; i < 5; i++){
    num[i] = Number(prompt("Digite um número"))
    acumuladora = num[i] + acumuladora
}

document.write(`A soma dos seus números é igual: ${acumuladora}<p>`)
document.write(`${num}`)