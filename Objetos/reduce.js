
// Você tem um array de objetos, onde cada objeto representa um produto com duas propriedades: id (único) e nome. Seu objetivo é converter esse array em um objeto de objetos, usando o id de cada produto como chave.
// Use o método reduce para transformar o array em um objeto.

// {
//   1: { nome: "Teclado" },
//   2: { nome: "Mouse" }
// }

const produtos = [
  { id: 1, nome: "Teclado" },
  { id: 2, nome: "Mouse" }
];

const resultado = produtos.reduce((accumulator, currentValue) => {
// Usando o id do produto atual como chave no acumulador
	accumulator[currentValue.id] = { nome: currentValue.nome };
  return accumulator;
}, {});

console.log(resultado);