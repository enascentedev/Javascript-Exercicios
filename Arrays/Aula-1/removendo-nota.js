//remover um elemento do array

const notas = [10, 8, 7, 9, 6];
notas.pop();
var media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);

const notasSplice = [10, 8, 7, 9, 6];
const indiceParaRemover = 2; // índice do elemento que você quer remover
notasSplice.splice(indiceParaRemover, 1); // Remove 1 elemento a partir do índice 2
console.log(notasSplice); // Resultado: [10, 8, 9, 6]

const notasShift = [10, 8, 7, 9, 6];
notasShift.shift(); // Remove o primeiro elemento
console.log(notasShift); // Resultado: [8, 7, 9, 6]

const notasFilter = [10, 8, 7, 9, 6];
const itemParaRemover = 7;
const notasFiltradas = notasFilter.filter((nota) => nota !== itemParaRemover);
console.log(notasFiltradas); // Resultado: [10, 8, 9, 6]
