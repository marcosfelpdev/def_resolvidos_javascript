const prompt = require("prompt-sync")();

let selecao = prompt('Qual medida você deseja converter? Digite "C" para Celsius e "F" para Fahrenheit: ').toUpperCase();

if(selecao === "C" || selecao === "F"){
    const valor = Number(prompt(`Digite a temperatura em ${selecao === "C" ? "Celsius" : "Fahrenheit"}: `));
    
    if(selecao === "C"){
        const resultC = (valor*(9/5))+32;
        console.log(`${valor}° Celsius é ${resultC}° Farenheit`);
    }else{
        const resultF = (valor - 32)*(5/9);
        console.log(`${valor}° Fahrenheit é ${resultF}° Celsius`);
    }

}else{
    console.log('A resposta foi inválida');
};