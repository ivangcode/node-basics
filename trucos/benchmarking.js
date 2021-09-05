// Using console.time() we may know how many time spends our functions.

console.time("todo");
let suma = 0;

console.time("bucle");
for (let i = 0; i < 1000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

// With async functions.
console.time("asincrono");
console.log("Empieza el proceso async");
asincrona()
  .then(() => {
    console.timeEnd("asincrono");
    });

console.timeEnd("todo");
function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Termina el proceso asincrono.");
      resolve();
    });
  }, 1000);
}
