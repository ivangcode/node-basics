/* The difference between the promises and the callbacks is,
the promises could be nested.

Use the promise much as you can, 'cause it watch the erros and ables to solve it.

*/

function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Bla bla bla bla...`);
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`adios ${nombre}!`);
      resolve();
    });
  }, 1000);
}

console.log("Iniciando el proceso...");

hola("Ivan")
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log("Terminando el proceso...");
  })
  .catch((error) => {
    console.error("There was an error..");
    console.error(error);
  });
