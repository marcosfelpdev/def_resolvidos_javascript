const prompt = require("prompt-sync")();



let list = []
list.push(prompt('número: '))
let String = list.join('')

digits(String);
function digits(s){
    if(s.length === 2){
        if(s[0] === s[1]){
            console.log(`${true} valor: ${s}`)
            return
        }else{
            console.log(`${false} valor: ${s}`)
            return
        }
    }else{
        list = []
        for(let i = 0; i < s.length - 1;i++){
            const a = Number(s[i])
            const b = Number(s[i + 1])
            list.push((a+b)%10)
        }
        return
    }
}


