/* Async await provides us sugar syntax. We haven't to write every promise with .then and catch, because this is doing it by async await.
 */

// For best practices we'll gonna use async in the declaration of the function, we'll gain readability.

async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Bla bla bla bla...`);
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`adios ${nombre}!`);
      resolve();
    });
  }, 1000);
}

console.log("Iniciando el proceso...");

async function main() {
  let nombre = await hola("ivan");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Termina el proceso...");
}

main();
