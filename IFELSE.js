const imprimirNota = function(nota){
    if(nota >= 7){
        console.log('Aprovado! Sua nota foi:', + nota)
    }else{
        console.log('Reprovado! Sua nota foi:', + nota)
    }
}

imprimirNota(9)
imprimirNota(5)