
// Cada produto é representado por um objeto que contém pelo menos três propriedades: id, nome e preço. Seu objetivo é criar uma nova lista que contenha apenas os produtos com preço maior que um valor específico. Além disso, você deve transformar essa lista filtrada para que cada item contenha apenas o nome do produto e um novo campo chamado precoFinal, que é o preço original com um desconto aplicado.

// Detalhes do problema:
// Você tem um array de objetos chamado produtos.
// Filtrar os produtos que têm um preço maior que 100.
// Para os produtos filtrados, aplicar um desconto de 10% sobre o preço.
// A lista resultante deve ser um array de objetos, mas cada objeto deve ter apenas duas propriedades: nome e precoFinal.

// Métodos que você deve usar para resolver este problema:
// filter(): Use este método para criar um novo array contendo apenas os produtos que satisfazem o critério de filtragem (preço maior que 100).
// map(): Após filtrar os produtos, use este método para transformar os itens do array filtrado. Você deverá ajustar o preço (aplicando o desconto) e retornar um novo objeto para cada produto com as propriedades nome e precoFinal.
// Dicas:
// Lembre-se de que o método map() pode ser encadeado após o filter(), o que permite fazer ambas as operações em sequência.
// Ao aplicar o desconto, certifique-se de calcular o precoFinal corretamente e incluí-lo no objeto resultante junto com o nome do produto.

const produtos = [
  { id: 1, nome: "Teclado Mecânico", preco: 150 },
  { id: 2, nome: "Mouse Sem Fio", preco: 80 },
  { id: 3, nome: "Monitor LED", preco: 300 },
  { id: 4, nome: "Cabo HDMI", preco: 20 },
  { id: 5, nome: "Suporte para Notebook", preco: 120 }
];

const resultado = produtos.filter((produtos)=> produtos.preco>100);


const final = resultado.map((produto) => {
  const precoComDesconto = produto.preco * 0.9; 
  return { nome: produto.nome, precoFinal: precoComDesconto };
});
console.log(final)