// Você tem um array de objetos representando diferentes produtos comprados em uma loja. Cada produto tem um nome e categoria. Seu objetivo é contar quantas vezes cada categoria aparece no array e retornar um objeto com essa contagem.

// Use o método reduce() para acumular as contagens de cada categoria em um objeto.
// Inicialize o acumulador como um objeto vazio.
// Para cada produto, incremente a contagem da categoria correspondente no objeto acumulador.
// resposta
// { 'Eletrônicos': 2, 'Eletrodomésticos': 1 }

const produtos = [
  { nome: "Notebook", categoria: "Eletrônicos" },
  { nome: "Geladeira", categoria: "Eletrodomésticos" },
  { nome: "Smartphone", categoria: "Eletrônicos" }
];

const inicial = {};
const resultado = produtos.reduce(
  (accumulator, currentValue) => {
		if(accumulator[currentValue.categoria]){
			accumulator[currentValue.categoria]+=1
		}else{
			accumulator[currentValue.categoria]=1
		}
		//Retorne o acumulador para a próxima iteração
		return accumulator;
	}, inicial); // inicial é o objeto vazio {}

console.log(resultado);