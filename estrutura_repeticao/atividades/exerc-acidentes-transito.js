let codMaceio = 001, codSalvador = 002, codAracaju = 003, codPortoalegre = 004, codNatal = 005
let maceioVeiculos = 1700, salvadorVeiculos = 1900, aracajuVeiculos = 1771, portoalegreVeiculos = 4682, natalVeiculos = 2391
let maceioAcidentes =  246, salvadorAcidentes = 250, aracajuAcidentes = 186, portoalegreAcidentes = 300, natalAcidentes = 200
let mediaVeiculos, mediaAcidentes

document.write(`<h1>Cidades com estatísticas</h1><br>
Maceió<br>
Salvador<br>
Aracaju<br>
Porto Alegre<br>
Natal<br>`)

mediaVeiculos = (maceioVeiculos + salvadorVeiculos + aracajuVeiculos + portoalegreVeiculos + natalVeiculos)/5
mediaAcidentes = (maceioAcidentes + salvadorAcidentes + aracajuAcidentes)/3

document.write(`<br>O maior índice pertence a porto Alegre e o menor pertence a Maceió <br>`)

document.write(`A média de veículos das 5 cidades é igual à: ${mediaVeiculos}<br>`)

document.write(`A média de acidentes nas cidades com menos de 2000 vaículos é igual à: ${mediaAcidentes.toFixed(2)} <br>`)