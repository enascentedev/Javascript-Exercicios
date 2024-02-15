// Descrição: Escreva uma função que recebe um objeto como argumento e retorna o número de propriedades (chaves) que ele tem.

// Dica: Utilize o método Object.keys() para obter um array de chaves do objeto e então retorne o comprimento desse array.

// Didática: Este exercício ajuda a entender como manipular objetos e suas propriedades, introduzindo métodos úteis do objeto Object que são fundamentais para trabalhar com objetos em JavaScript.

function contarPropriedades(objeto) {
	// Transforma as chaves do objeto em um array e retorna o seu tamanho
	return Object.keys(objeto).length;
}

// Exemplo de uso
const exemploObjeto = {
	nome: "João",
	idade: 30,
	profissao: "Engenheiro"
};

console.log(contarPropriedades(exemploObjeto));