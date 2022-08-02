// //criação do objeto estudante

// const estudante = {
//   nome: "Ana Karoliny",
//   sobrenome: "de Souza Gomes",
//   matricula: "117498",
//   notasSemestre: [7, 9.5, 8],
// };

// console.log(estudante);

// //adicionando uma nova propriedade ao estudante

// estudante.modulo = "HTML Semântico";
// console.log("estudante com módulo", estudante);

// //imprimindo informações

// console.log(estudante.nome);
// console.log(estudante.notasSemestre[1]);
// console.log(estudante.modulo);

// //fazendo cópia do objeto estudante

// const copiaEstudante = { ...estudante };
// console.log(copiaEstudante);

// //Alterando o valor da propriedade nome

// copiaEstudante.nome = "Astrodev";
// console.log("copia com nome alterado", copiaEstudante);

// // Adicionando nota 9 as notas do semestre

// copiaEstudante.notasSemestre.push(9);
// console.log("nota 9 adicionada", copiaEstudante);

// //Alterando o valor de módulo

// copiaEstudante.modulo = "Flexbox e Grid";
// console.log("Cópia com módulo alterado", copiaEstudante);

// //criação do array estudantesLabenu

// const estudantesLabenu = [];
// estudantesLabenu.push(estudante);
// estudantesLabenu.push(copiaEstudante);

// console.log("array de estudantes Labenu", estudantesLabenu);

const carrinho = {
  nome: "Karol",
  formaDePag: "Cartão de crédito",
  enderecoCliente: "Rua Dallas, nº2",
};

carrinho.compras = [
  {
    nome: "Red Velvet",
    preco: "R$ 25,00",
    quantidade: 3,
  },
  {
    nome: "Croissant",
    preco: "R$ 15,00",
    quantidade: 5,
  },
];

console.log(carrinho);
console.log("No carrinho há:", carrinho.compras.length, "itens!");

const carrinhoPresente = { ...carrinho };
carrinhoPresente.nome = "Labenu";
carrinhoPresente.formaDePag = "Cartão Presente";

console.log(carrinhoPresente);
