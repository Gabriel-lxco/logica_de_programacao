
/* Relembrando alguns conceitos
* 1 - Leia o Array Mostre os números positivos
* 2 - Leia o Array Mostre os números negativos
* 3 - Leia o array, verifique se no array existe o número 6 e qual posição ele está 
*/

//Início 1º - Leia o Array Mostre os números positivos
// const vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

// for(let i = 0; i < vetor1.length; i++){
//     if(vetor1[i] > 0){
//         console.log(`Valor ${vetor1[i]} POSITIVO`)
//     }
// }

//FIM 1º

//Início 2º - Leia o Array Mostre os números negativos
// const vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

// for(let i = 0; i < vetor1.length; i++){
//     if(vetor1[i] < 0){
//         console.log(`Valor ${vetor1[i]} NEGATIVO`)
//     }
// }

//FIM 2º

//Início 3º - Leia o array, verifique se no array existe o número 6 e qual posição ele está
const vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

for(let i = 0; i < vetor1.length; i++){
    if(vetor1[i] === 6){
        console.log(`O array POSSUI o número 6 e ele está na POSIÇÃO: ${i}`)
    }
}

//FIM 3º

console.log(vetor1)