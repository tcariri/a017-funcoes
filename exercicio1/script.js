// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function pessoa(nome){
//     console.log("Olá,",nome)
// }
// pessoa('thais')

// // b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// const num =[1,2,3,4,5,6,7,8,9,10]

// function tabuada(resultado){
//     for(i in num){
//         console.log(`${resultado}x ${num[i]} = ${resultado*num[i]}`)
//     }
// }
// tabuada(6)
// tabuada(7)


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__

const pessoa =(nome) =>{
    console.log("olá,",nome)
}
pessoa("thais")

const num =[1,2,3,4,5,6,7,8,9,10]

const tabuado = (resultado) =>{
    for(i in num){
     console.log(`${resultado}x ${num[i]} = ${resultado*num[i]}`)}
}
tabuado(6)
