// Temos que mostrar os que estão reprovados
const alunos = ["Ana", "Estevam", "Licanor", "Davi", "Salomão"];
const notas = [5, 8, 9, 8, 10];

const reprovados = alunos.filter((aluno, indice) => {
	return notas[indice] < 7;
});
console.log(reprovados);

// O filter() vai receber uma função callback como parâmetro, vamos inserir uma arrow function, receberemos aluno e precisaremos também do indice porque com ele conseguiremos acessar a média de cada aluno na outra lista. Dentro das chaves da função vamos retornar verdadeiro ou falso, para saber se o aluno será incluído na lista de reprovados.
