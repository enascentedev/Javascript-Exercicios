//remover Ana e caio da lista e colocaro nome Rodrigo no lugar desses elementos

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
nomes.splice(1, 2, "Rodrigo"); //Remove 2 elementos a partir do índice 1 (remove "Ana" e "Caio") Insere o novo elemento "Rodrigo" no índice 1..
nomes.splice(1, 2, "joão");
console.log(nomes); //Resultado final: ["João", "Rodrigo", "Lara", "Marjorie", "Leo"]
