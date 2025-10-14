const prompt = require('prompt-sync')();

let nome = "Marcos"
let periodo = prompt(`Em qual período do dia você está se comunicando?` ).toUpperCase();

let verificar = 
function saudar (nomeDoUsuario, periodoDoDia){
    if(periodoDoDia === 'MANHÃ'){
        console.log(``)
    }
    
}

saudar(nome, periodo);