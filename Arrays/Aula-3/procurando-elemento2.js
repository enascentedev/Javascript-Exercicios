const produtos = ["Maçã", "Banana", "Laranja", "Uva"];
const precos = [2.5, 1.5, 3, 4];

function buscarPrecoPorProduto(produto) {
	const index = produtos.indexOf(produto);

	if (index !== -1) {
		const preco = precos[index];
		return `O preço da ${produto} é R$ ${preco.toFixed(2)}`;
	} else {
		return `O produto ${produto} não foi encontrado na lista`;
	}
}

const produtoProcurado = "Banana";
const resultadoBusca = buscarPrecoPorProduto(produtoProcurado);
console.log(resultadoBusca);

// Neste exercício, criamos uma função buscarPrecoPorProduto que recebe o nome de um produto como argumento. A função verifica se o produto está presente na lista produtos usando o método indexOf. Se o produto for encontrado na lista, a função retorna uma mensagem com o preço correspondente. Caso contrário, retorna uma mensagem indicando que o produto não foi encontrado.

// A variável produtoProcurado contém o nome do produto que você deseja buscar, e o resultado da busca é armazenado na variável resultadoBusca, que é então impressa no console.

// Lembre-se de que os nomes dos produtos são sensíveis a maiúsculas e minúsculas. Certifique-se de fornecer o nome exatamente como está na lista de produtos para obter resultados corretos.
