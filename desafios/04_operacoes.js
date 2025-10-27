const prompt = require("prompt-sync")();


ini();

function ini(){
    const operacao = Number(prompt(`
    Digite o número correspondente a operação que deseja executar:
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão:
    
    `));

    if(operacao <= 0 || operacao >= 5){
        console.log('Opção inválida!');
        return ini();
    }else{
        const num01 = Number(prompt('Digite o primeiro número: '));
        const num02 = Number(prompt('Digite o segundo número: '));
        const {tipo, result} = calcular(num01, num02, operacao);
        console.log(`O resultado da ${tipo} entre ${num01} e ${num02} é: ${result}`);      
    }
}

function calcular(n1, n2, operacao){
    switch(operacao){
        case 1:{
            const tipo = 'soma';
            const result = n1+n2;
            return {tipo, result};
        }
        case 2:{
            const tipo = 'subtração';
            const result = n1-n2;
            return {tipo, result};
        }
        case 3:{
            const tipo = 'multiplicação';
            const result = n1*n2;
            return {tipo, result};
        }
        case 4:{
            const tipo = 'divisão';
            const result = n1/n2;
            return {tipo, result};
        }
    }
}