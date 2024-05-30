// Você tem uma função que recebe um array de números e retorna a soma de todos os números.
// Use a função reduce() para acumular a soma dos números no array.
// Inicialize o acumulador como 0.
// Para cada número, adicione o valor ao acumulador.

const numeros = [1, 2, 3, 4, 5];


function somaArray() {
  const valorInicial = 0;
	const soma=numeros.reduce((accumulator, valorAtual)=>accumulator+valorAtual,valorInicial)
	return soma
}
console.log(somaArray());

// Inicialização
// accumulator é definido pelo valorInicial, que é 0.
// Primeira Iteração
// accumulator (0) + valorAtual (1) = 1
// Novo valor de accumulator é 1.
// Segunda Iteração
// accumulator (1) + valorAtual (2) = 3
// Novo valor de accumulator é 3.
// Terceira Iteração
// accumulator (3) + valorAtual (3) = 6
// Novo valor de accumulator é 6.
// Quarta Iteração
// accumulator (6) + valorAtual (4) = 10
// Novo valor de accumulator é 10.
// Quinta Iteração
// accumulator (10) + valorAtual (5) = 15
// Novo valor de accumulator é 15.
// Resultado Final
// O valor final do accumulator após todas as iterações é 15.
// reduce retorna 15, que é então atribuído à variável soma.