function mesclarObjetos(obj1, obj2) {
	// Retorna um novo objeto combinando obj1 e obj2
	// As propriedades de obj2 sobrescrevem as de obj1 em caso de conflito
	return {...obj2, ...obj1};
}

// Exemplo de uso
const objeto1 = {
	nome: "Ana",
	idade: 25
};

const objeto2 = {
	idade: 30,
	cidade: "São Paulo"
};

const objetoCombinado = mesclarObjetos(objeto1, objeto2);
console.log(objetoCombinado);

