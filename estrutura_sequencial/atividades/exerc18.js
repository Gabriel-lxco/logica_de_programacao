let titulo, horas, minutos

titulo = prompt("Digite o título de seu filme: ")
minutos = parseFloat(prompt("Digite quanto tempo o seu filme possui em minutos: "))

horas = minutos/60
horas = Math.floor(horas)
minutos = minutos - (horas * 60)

document.write(`O filme ${titulo} possui ${horas}h ${minutos}m`)