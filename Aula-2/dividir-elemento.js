//Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:
// Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. Isto é, duas listas com 10 estudantes, cada.
const alunos = [
	"João",
	"Juliana",
	"Ana",
	"Caio",
	"Lara",
	"Marjorie",
	"Guilherme",
	"Aline",
	"Fabiana",
	"Andre",
	"Carlos",
	"Paulo",
	"Bia",
	"Vivian",
	"Isabela",
	"Vinícius",
	"Renan",
	"Renata",
	"Daisy",
	"Camilo",
];
const sala1 = alunos.slice(0, 10); // Usando o método slice() para criar a sala1, pegando os primeiros 10 alunos
const sala2 = alunos.slice(10); // Usando o método slice() para criar a sala2, pegando a partir do 11º aluno até o final
console.log(sala1);
//Resultado:  'João',      'Juliana',
// 'Ana',       'Caio',
// 'Lara',      'Marjorie',
// 'Guilherme', 'Aline',
// 'Fabiana',   'Andre'
console.log(sala2);
// Resultado: 'Carlos',  'Paulo',
// 'Bia',     'Vivian',
// 'Isabela', 'Vinícius',
// 'Renan',   'Renata',
// 'Daisy',   'Camilo'
