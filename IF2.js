function test1(num){
    if(num > 7)
    console.log(num)
    console.log('FINAL')
}

test1(6)
test1(8)

function test2(num){
    if(num > 7);{ // Não usar ; dentro de estruturas de controle
        console.log(num)
    }
}
test2(6)
test2(8)