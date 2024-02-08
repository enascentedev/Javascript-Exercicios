const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
	console.log(indice, numeros[indice]);
}
for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		console.log(i + " x " + j + " = " + i * j);
	}
	console.log("------");
}
// Loop Externo (i):

// for (let i = 1; i <= 10; i++): Este é o loop externo. A variável i começa com o valor 1 e aumenta a cada iteração até chegar a 10.
// Loop Interno (j):
// Dentro do loop externo, há outro loop "for" definido como for (let j = 1; j <= 10; j++). A variável j começa com o valor 1 e aumenta a cada iteração até chegar a 10.
// Cálculo e Exibição:
// Dentro do loop interno, console.log(i + " x " + j + " = " + i * j); é usado para calcular e exibir a multiplicação. Ele exibe a expressão "i x j = i * j", onde i é o número da linha da tabela de multiplicação, j é o número da coluna, e i * j é o resultado da multiplicação.
// Separação das Linhas:
// Após cada linha completa da tabela de multiplicação, console.log("------"); é usado para exibir uma linha de traços, separando as linhas da tabela.
