// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const soma = (num1,num2) =>{
     return num1 + num2
}
console.log("resultado da soma",soma(2,3))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const maiorOuIgual=(num1,num2) => {
    if (num1>=num2){
        console.log("o num 1 é maior ou igual ao num2",true)
    }else{
        console.log("o num 1 é maior ou igual ao num2",false)
    }
 
}
 maiorOuIgual(7,6)
 maiorOuIgual(5,6)

// c) Uma função que receba um número e imprima se ele é par ou não

const Par =(numero) =>{
    if(numero % 2===0){
        console.log("é par")
    }else{
        console.log("não é par")
    }
}
Par(8)
Par(7)
// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

const mensagem = (string) =>{
    console.log("o tamanho da string é",string.length)
    console.log (string.toUpperCase())
}

mensagem('teste')
mensagem('um teste maior')