// Função que simula uma operação assíncrona usando setTimeout
function operacaoAssincrona(callback) {
  console.log("Iniciando operação assíncrona...");

  setTimeout(() => {
    console.log("Operação assíncrona concluída.");
    callback();
  }, 2000); // Simula um atraso de 2 segundos
}

// Função de callback que será executada após a operação assíncrona
function aposOperacao() {
  console.log("Executando o callback após a operação assíncrona.");
}

// Chame a função operacaoAssincrona e passe a função de callback como argumento
operacaoAssincrona(aposOperacao);