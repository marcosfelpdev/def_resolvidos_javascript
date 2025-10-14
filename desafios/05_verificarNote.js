const prompt = require('prompt-sync')();



let nota1 = Number(prompt(`Informe sua primeira nota: `))
let nota2 = Number(prompt(`Informe sua primeira nota: `))
let nota3 = Number(prompt(`Informe sua primeira nota: `))

const lista = []
lista.push(nota1, nota2, nota3)
let soma = 0
function calcular(listaDeNotas){
    for(i = 0;i < listaDeNotas.length; i++){
        soma += lista[i]
    }
    
    let valorFinal = soma/listaDeNotas.length

    if(valorFinal >= 7){
        console.log(`Você está aprovado`)
    }else{
        console.log(`Você está reprovado`)
    }
}   

calcular(lista)