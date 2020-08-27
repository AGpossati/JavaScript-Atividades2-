function boasNovas(nota){
    if(nota >= 7){
        console.log('Aprovado com: ', + nota)
    }
}
boasNovas(7.8)
boasNovas(6.1)

function SeForVerdade(valor){
    if(valor){
        console.log('É verdade...', + valor)
    }
}

SeForVerdade()
SeForVerdade(undefined)
SeForVerdade(NaN)
SeForVerdade(null)
SeForVerdade('')
SeForVerdade(0)
SeForVerdade(-1)
SeForVerdade(' ')
SeForVerdade('?')
SeForVerdade([])
SeForVerdade([1, 3])
SeForVerdade({})
