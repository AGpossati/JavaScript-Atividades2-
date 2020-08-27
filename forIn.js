const notas = [4.7, 9.8, 6.7, 8.9, 6.5]

for(let i in notas){
    console.log(i,'-', notas[i])
}

const pessoa ={
    Nome: 'Augusto',
    Sobrenome: 'Oliveira',
    Peso: 80,
    Idade: 27
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}