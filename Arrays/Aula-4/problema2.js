// Você recebe uma lista de objetos representando usuários. Seu objetivo é agrupar esses usuários por faixa etária e retornar um objeto onde cada chave é uma faixa etária, e seu valor é um array contendo os nomes dos usuários que se encaixam nessa faixa.

// Detalhes do problema:
// As faixas etárias são: "18-30", "31-45", "46-60", e "61+".
// Cada usuário é representado por um objeto com duas propriedades: nome e idade.
// O resultado deve ser um objeto onde as chaves são as faixas etárias e os valores são arrays de nomes de usuários que se encaixam nessas faixas.
// Dicas para a solução:
// Você pode usar o método reduce para percorrer o array de usuários e construir o objeto final com os usuários agrupados por faixa etária.
// Dentro da função callback do reduce, você decidirá em qual faixa etária o usuário atual se encaixa e o adicionará ao array correspondente na chave correta do objeto acumulador.
// Lembre-se de inicializar o objeto acumulador no reduce com todas as faixas etárias já definidas, ou verifique e crie dinamicamente as chaves/arrays conforme necessário.

const usuarios = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 33 },
  { nome: "Charlie", idade:35 },
  { nome: "David", idade: 48 },
  { nome: "Eva", idade: 67 }
];

const usuariosPorFaixaEtaria = usuarios.reduce((acumulador, usuario) => {
  // Determinar a faixa etária do usuário
  let faixaEtaria;
  if(usuario.idade >=18 && usuario.idade <=30){
		faixaEtaria = "18-30";
	}else if (usuario.idade >=31 && usuario.idade<=45){
		faixaEtaria = "31-45";
	} else if (usuario.idade >=46 && usuario.idade<=60){
		faixaEtaria = "46-60"
	} else{
		faixaEtaria = "61+";
	}

  acumulador[faixaEtaria].push(usuario.nome);

  return acumulador;
}, {
  "18-30": [],
  "31-45": [],
  "46-60": [],
  "61+": []
});

console.log(usuariosPorFaixaEtaria);
