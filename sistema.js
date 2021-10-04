let numeroDeAluno = 10;

for (let contador = 0; contador <= numeroDeAluno; contador++) {
     //console.log(contador)

    if (contador ==0) {
        console.log("O numero atual é zero");
    } else if (contador % 2 == 0){
     console.log("O número " + contador + " É  PAR")
    } else {
        console.log(`O número ${contador} é  IMPAR`)
    }
        
}