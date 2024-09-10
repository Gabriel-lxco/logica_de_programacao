//2ª maneira - continue - break
// continue -> faz um novo teste lógico
// break -> finaliza a estrutura de repetição

for(let i = 1; i<=10; i++) {
    if( i === 5 || i === 8){
        continue
    }
    if(i === 6){
        break
    }
    console.log("i: "+i)
}