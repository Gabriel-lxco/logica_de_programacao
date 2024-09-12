let idOpe, pecasFab, genero, pecasPmes = 0
let i = 0
let mediaPhomem, mediaPmulher
let salario = 1412, class1 = 0, class2 = 0

while (i != 15) {
    debugger
    do {
        idOpe = parseInt(prompt(`Digite seu ID: `));
        if (idOpe ===0 || isNaN(idOpe)) {
           alert("Digite uma identificação válida")
        }   

        genero = prompt("Digite seu gênero: ")

       } while (idOpe <= 0 || isNaN(idOpe));
   
       do {
        pecasFab = parseInt(prompt(`Digite a seguir quantas peças você produz por mês`));
        if (pecasFab <= 0 || isNaN(pecasFab)) {
           alert("O valor da conta precisa ser números")
        }   
       } while (pecasFab <= 0 || isNaN(pecasFab));
        
        if (pecasFab <= 20) {
            document.write(`Sua identificação é: <strong>${idOpe}</strong><br>`)
            document.write(`De acordo com a sua quantidade de peças produzidas você pertence a <strong>classe 3</strong>,<br>`)
            document.write(`Seu salário fixo é de: ${1412}<br><br>`)
        } else if((pecasFab >= 21) && (pecasFab <=30)) {
            pecasFab = pecasFab - 20
            class2 = salario + ((salario * pecasFab)/100)
            document.write(`Sua identificação é: <strong>${idOpe}</strong><br>`)
            document.write(`De acordo com a sua quantidade de peças produzidas você pertence a <strong>classe 2</strong>,<br>`)
            document.write(`Seu salário é de: ${class2}<br><br>`)
        } else if(pecasFab > 30){
            pecasFab = pecasFab - 30
            class1 = salario + ((salario * pecasFab)/100)
            document.write(`Sua identificação é: <strong>${idOpe}</strong><br>`)
            document.write(`De acordo com a sua quantidade de peças produzidas você pertence a <strong>classe 1</strong>,<br>`)
            document.write(`Seu salário é de: ${class1}<br><br>`)
            
        }

        if (genero = "feminino") {
            
        } else {
            
        }

        pecasPmes = pecasPmes + pecasFab


        i++

}

document.write(`<h2>O número total de peças produzidas por mês é igual à: ${pecasPmes}<h2>`)

//fazer identificacao do genero e tirar media das peças!!!!!