// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

// O método includes é utilizado em arrays em JavaScript para verificar se um determinado elemento está presente no array. Ele retorna true se o elemento estiver no array e false caso contrário. A função aceita dois argumentos: o elemento que você deseja verificar e um segundo argumento opcional que indica a partir de qual índice você deseja começar a busca no array.

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
	if (listaDeAlunosEMedias[0].includes(aluno)) {
		console.log(`${aluno} está cadastrado`);
		const indice = listaDeAlunosEMedias[0].indexOf(aluno);
		const mediaAluno = listaDeAlunosEMedias[1][indice];
		console.log(mediaAluno);
	} else {
		console.log("o aluno não está cadastrado");
	}
}
exibeNomeENota("João");
