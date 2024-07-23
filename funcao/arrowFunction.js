// Função normal
function soma(a, b) {
  return a + b;
}
// Arrow Function
const soma = (a, b) => a + b;

// Exercício Prático
// Crie uma função que receba um array de números e retorne a soma de todos os números, utilizando Arrow Functions e o método reduce.


const numeros = [1, 2, 3, 4, 5];

// Use uma Arrow Function para somar todos os números
const somaTotal = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(somaTotal); // Deve retornar 15