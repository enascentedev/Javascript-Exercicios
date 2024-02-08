// Função de retorno de chamada para filtrar números pares
function filtrarNumerosPares(elemento) {
	return elemento % 2 === 0;
}

// Array de exemplo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares usando o método forEach e a função de callback
const numerosPares = [];
numeros.forEach(function (elemento) {
	if (filtrarNumerosPares(elemento)) {
		numerosPares.push(elemento);
	}
});

console.log("Números pares:", numerosPares);

// Função de retorno de chamada para filtrar números pares
const filtrarNumerosPares = (elemento) => elemento % 2 === 0;

// Array de exemplo
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares usando o método forEach e a arrow function
const numerosPares2 = [];
numeros.forEach((elemento) => {
	if (filtrarNumerosPares(elemento)) {
		numerosPares.push(elemento);
	}
});

console.log("Números pares:", numerosPares2);
