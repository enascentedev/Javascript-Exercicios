// Você tem uma função que recebe um array de números e retorna um novo array contendo apenas os números pares.
// Use o método filter() para filtrar os números pares.
// A função deve retornar o novo array.

const numeros = [1, 2, 3, 4, 5, 6];

function filtrarPares() {
  const resultado= numeros.filter ((numero) =>numero %2 === 0)
	return resultado
}

console.log(filtrarPares(numeros));