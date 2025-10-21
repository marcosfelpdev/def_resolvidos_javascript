const prompt = require("prompt-sync")();

const numero01 = Number(prompt('Digite o primeiro número: '))
const numero02 = Number(prompt('Digite o segundo número: '))
const operacao = Number(prompt(`
    Digite o número correspondente a operação que deseja executar:
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão:
`))

function calcular (n1, n2, operacao){
    
    if(operacao === 1){
        soma = (n1+n2)
        console.log(`Você escolheu 1 - soma, a operação entre os números ${n1} e ${n2} é igual a: ${soma}`)
        return
    }else if(operacao === 2){
        subtracao = (n1-n2)
        console.log(`você escolheu 2 - Subtração, a operação entre os números ${n1} e ${n2} é igual a: ${subtracao}`)
        return
    }else if(operacao === 3){
        multiplicacao = (n1*n2)
        console.log(`Você escolheu 3 - multiplicação, a operação entre os números ${n1} e ${n2} é igual a: ${multiplicacao}`)
        return
    }else if(operacao === 4){
        divisao = (n1/n2)
        console.log(`Você escolheu 4 - divisão, a operação entre os números ${n1} e ${n2} é igual a: ${divisao}`)
        return
    }

    console.log('O número ou a operação selecionada não é válido')

}

calcular (numero01, numero02, operacao);