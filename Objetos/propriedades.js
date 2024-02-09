// Escreva uma função que recebe um objeto e verifica se ele contém certas propriedades. A função deve aceitar dois parâmetros: o objeto e um array de strings representando as propriedades a serem verificadas.

// Saída Esperada:
// true se o objeto contém todas as propriedades listadas.
// false se o objeto não contém pelo menos uma das propriedades listadas.

// Dicas:
// Considere usar o método every para verificar se todas as propriedades existem no objeto.

const pessoa = { idade: 25, email: "alice@example.com" };
const propriedades = ["nome", "idade"];

const verificaPropriedades = (objeto, props) => {
  return props.every(propriedade => objeto.hasOwnProperty(propriedade));
};

console.log(verificaPropriedades(pessoa, propriedades));