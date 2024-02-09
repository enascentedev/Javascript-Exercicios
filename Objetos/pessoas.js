// Você tem um array de objetos representando diferentes pessoas. Cada pessoa tem um nome, idade, e email. Seu objetivo é escrever uma função que receba este array e o nome de uma pessoa como argumentos, e atualize a idade dessa pessoa. Se a pessoa não existir no array, sua função deve retornar uma mensagem indicando isso.

// Dicas:

// Use o método findIndex() para encontrar o índice da pessoa no array.
// Se a pessoa for encontrada, atualize a idade.
// Considere retornar uma mensagem adequada se a pessoa não for encontrada

const pessoas = [
  { nome: "Alice", idade: 25, email: "alice@example.com" },
  { nome: "Bob", idade: 30, email: "bob@example.com" }
];

function atualizaIdade(pessoas,nome,novaIdade) {
const confereNome= (pessoas.findIndex(pessoa =>pessoa.nome===nome))
	if (confereNome !=-1){
		pessoas[confereNome].idade = novaIdade;
    return pessoas;
	}else{
		return "pessoa não encontrada"
	}

}
console.log(atualizaIdade(pessoas, "Alice", 26)); // Atualiza a idade de Alice para 26
console.log(atualizaIdade(pessoas, "Charlie", 30)); // Retorna "Pessoa não encontrada"