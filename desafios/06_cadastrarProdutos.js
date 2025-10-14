const prompt = require('prompt-sync')();

const quantidadeProdutos = Number(prompt(`Quantos produtos você deseja cadastrar? `))


const Produto = []
function cadastrar(QprodutosCadastrados){
    for(i = 0; i < QprodutosCadastrados;i++){
        const nomeProduto = prompt('Qual o nome do produto a ser cadastrado? ')
        const preco = Number(prompt('Qual o valor desse produto? '))
        const quantidade = Number(prompt('Quantos desses produtos há no estoque?'))

        Produto.push({
            nome: nomeProduto,
            preco: preco,
            quantidade: quantidade,

        })
    }
    console.log(Produto)
}

cadastrar(quantidadeProdutos)