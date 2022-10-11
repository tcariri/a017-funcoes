
const soma = (num1,num2) =>{
    let resultadoSoma = num1+num2
    return resultadoSoma
    
}
const subtracao = (num1,num2) =>{
    let resultadoSub =num1 - num2
    return resultadoSub

}
const divisao = (num1,num2) =>{
    let resultadoDivisao = num1 / num2
    return resultadoDivisao

}
const multiplicacao = (num1,num2) =>{
    let resultadomulti= num1 * num2
    return resultadomulti
}

let num1 = +prompt("insira o primeiro numero")
let num2 = +prompt("insira o segundo numero")


console.log("o resultado da soma é",soma(num1,num2))
console.log("o resultado da Subtração é",subtracao(num1,num2))
console.log("o resultado da Divisão é",divisao(num1,num2))
console.log("o resultado da Multiplicação é",multiplicacao(num1,num2))



