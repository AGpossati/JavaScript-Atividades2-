const imprimirNota = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Fodão!!!', + nota)
            break
        case 8: case 7:
            console.log('Aprovado!!', + nota)
            break
        case 6: case 5: case 4:
            console.log('Recuperação!', + nota)
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado...', + nota)
            break
        
        default:
            console.log('Nota Inválida')
    }
}

imprimirNota(9,87)
imprimirNota(8,9)
imprimirNota(6,54)
imprimirNota(4,87)
imprimirNota(-9)