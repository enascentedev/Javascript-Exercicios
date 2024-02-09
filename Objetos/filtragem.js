// Problema:
// Dado um array de objetos onde cada objeto representa um produto, com propriedades como nome, preco e categoria, você deve filtrar esse array para incluir apenas os produtos de uma categoria específica.

// Use o método filter() para criar um novo array que contenha apenas os produtos da categoria desejada.

const produtos = [
  { nome: "Notebook", preco: 2100, categoria: "Eletrônicos" },
  { nome: "Geladeira", preco: 1300, categoria: "Eletrodomésticos" },
  { nome: "Smartphone", preco: 1500, categoria: "Eletrônicos" }
];

const resultado = produtos.filter((produto) => produto.categoria==="Eletrônicos" );
console.log(resultado)