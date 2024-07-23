// Escreva uma função que realiza uma requisição HTTP GET para a URL fornecida e exibe os dados no console
async function obterDados(url) {
  try {
    let resposta = await fetch(url);
    let dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao obter dados:", erro);
  }
}

// Chame a função com uma URL de exemplo
obterDados("https://jsonplaceholder.typicode.com/posts");