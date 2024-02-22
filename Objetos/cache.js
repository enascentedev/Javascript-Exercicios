//Exercício: Cachê de Função
//Escreva uma função chamada comCachê que recebe uma função como argumento e retorna uma nova função que cacheia seus resultados. Se a função cacheada for chamada com argumentos para os quais ela já foi chamada antes, a função cacheada deve retornar o resultado do cachê em vez de chamar novamente a função original. Assuma que a função original recebe apenas um argumento para simplificar.
//Por exemplo, se a função original for uma função que calcula o quadrado de um número, a função cacheada deve calcular o quadrado de um número //apenas uma vez para cada argumento; chamadas subsequentes com o mesmo argumento devem retornar o valor do cachê.

function comCache(fn) {
  const cache = {}; 
  return function(arg) {
    if (!(arg in cache)) { 
      cache[arg] = fn(arg); 
    }
    return cache[arg]; 
  };
}

function quadrado(n) {
  console.log('Calculando o quadrado de', n);
  return n * n;
}

const quadradoCacheado = comCache(quadrado);

console.log(quadradoCacheado(5)); // Calcula e retorna 25
console.log(quadradoCacheado(5)); // Retorna 25 do cachê, sem calcular novamente
console.log(quadradoCacheado(9)); // Calcula e retorna 81
