function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Dados recebidos";
      resolve(data);
    }, 1000);
  });
}

fetchData().then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error);
});
