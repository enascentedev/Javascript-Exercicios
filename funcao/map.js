// Você tem uma função que recebe um array de strings e retorna um novo array com todas as strings em maiúsculas.
// Use o método map() para transformar cada string em maiúscula.
// A função deve retornar o novo array.

const palavras = ["ola", "mundo", "javascript"];

function transformarMaiusculas() {
  const maiusculas = palavras.map(palavra => palavra.toUpperCase());
	return maiusculas
}

console.log(transformarMaiusculas(palavras));

// Como o map() Funciona
// Iteração: O método map() itera sobre cada elemento do array arr.
// Função de Callback: Para cada elemento, a função de callback palavra => palavra.toUpperCase() é chamada.
// Novo Array: Um novo array é criado onde cada elemento é o resultado da função de callback.
// Detalhamento da Iteração
// Para o array ["ola", "mundo", "javascript"]:

// Primeira Iteração:
// palavra é "ola".
// palavra.toUpperCase() retorna "OLA".
// Segunda Iteração:
// palavra é "mundo".
// palavra.toUpperCase() retorna "MUNDO".
// Terceira Iteração:
// palavra é "javascript".
// palavra.toUpperCase() retorna "JAVASCRIPT".
// O resultado é um novo array ["OLA", "MUNDO", "JAVASCRIPT"].