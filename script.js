// const estudante = {
//     nome: "Jennifer",
//     sobrenome: "Castro",
//     nomeDaMatricula: 29165,
//     notasDoSemestre: [8, 10]
//     }

//     // estudante.modulo = "javascript"
//     console.log(estudante.nome)


//     //copiar o objeto e alterar as propriedades
//     const novoEstudante = {
//         ...estudante,
//         nome: "EstudanteNovo",
//         notasDoSemestre: [...estudante.notasDoSemestre, 9],
//         modulo: "HTML"
//     }    
//     console.log(novoEstudante)

//     const arrayEstudantesLabenu = [{...estudante}, {...novoEstudante}, {nome:"Juliana", graduacao: "sistemas"}]
  
//     const arrayEstudantesLabenu = [{estudante}, {novoEstudante}, {nome:"Juliana", graduacao: "sistemas"}]


//     console.log(arrayEstudantesLabenu)

const carrinho = {
   nomeComprador: 'jennifer',
   pagamento: 'dinheiro',
   enderecoComprador: 'rua',
   
}

//acessando uma propriedade que nao existe e por isso ela vi ser criada e incluida no objeto carrinho, por isso do =
carrinho.arrayCompras = [{nomeProduto:'livro', precoProduto:2, qtd:1000}]

console.log(carrinho)
console.log(carrinho.arrayCompras)