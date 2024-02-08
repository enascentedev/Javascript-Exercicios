// Exercício 1: Transformando um Objeto em Array de Objetos
// Problema:
// Você tem um objeto representando diferentes categorias e seus respectivos valores. Seu objetivo é transformar este objeto em um array de objetos, onde cada objeto terá duas propriedades: categoria e valor.

// Dicas:

// Use o método Object.keys() ou Object.entries() para iterar sobre o objeto.
// Dentro da iteração, crie um novo objeto para cada categoria e adicione-o a um array.
// Métodos úteis:

// Object.keys()
// Object.entries()
// map()

// Objeto de entrada:
const categorias = {
  alimentacao: 150,
  transporte: 100,
  lazer: 50
};
const resultado = Object.keys(categorias).map(chave => ({
  categoria: chave,
  valor: categorias[chave]
}));

console.log(resultado);