// So, this works as a callback function.

function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

console.log("Tniciando proceso..");

hola('Ivan', function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso...");
  });
});
