alert("Digite 0 para sair do programa")
let numero;

do {
   numero = parseInt(prompt("Digite um número: "))
   debugger
   if(numero === 0 || isNaN(numero)){
    //confirmar saída
    let sair = prompt("Confrmar saída")
    if (sair) {
        break
    } else{
        continue
    }
   }

   //continuar a lógica par(dobro) e impar(triplo)

   if(numero % 2 === 0) {
    alert(`O dobro do ${numero} é; ${numero * 2}`);
   } else{
    alert(`O triplo do ${numero} é: ${numero * 3}`)
   }
} while (true);