Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirNota = function(nota){
    if(nota.entre (9, 10)){
        console.log('Fodão!!!')
    }else if(nota.entre (7, 8.99)){
        console.log('Parabens!!')
    }else if(nota.entre (5, 6.99)){
        console.log('Recuperação!')
    }else if(nota.entre (0, 4.99)){
        console.log('Reprovado...')
    }else{
        console.log('Inválido?')
    }
    //console.log('This is the End')
}
imprimirNota(9.5)
imprimirNota(7.2)
imprimirNota(5.99)
imprimirNota(2.4)
imprimirNota(-9)
imprimirNota(11)