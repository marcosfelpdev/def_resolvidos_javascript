const prompt = require("prompt-sync")();

const numRandom = Math.ceil(Math.random()*100)


function adivinhar(numRandom){
    
    const numUser = Number(prompt('Digite um número entre 1 e 100: '))


    if(numRandom > numUser){
        console.log('O número secreto é maior')
        adivinhar(numRandom);
        return
    }else if(numRandom < numUser){
        console.log('O número secreto é menor')
        adivinhar(numRandom)
        return
    }else if(numRandom === numUser){
        console.log('Você acertou!!')
        return
    }

    }
    

