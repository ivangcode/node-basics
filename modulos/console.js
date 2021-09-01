// Makes a table into the console. Very useful.
var table = [
  {
    a: 1,
    b: "otra",
  },
];
console.table(table);

// Prints and saves in color the errors.
console.error("something");
// Prints and saves in color a potential error.
console.warn("something");

// How to group functions into the console.
function function2() {
  console.group("Funcion 2");
  console.log("Esto es de la funcion 2");
  console.groupEnd("Function 2");
}
function function1() {
  console.group("Funcion 1");
  console.log("Esto es de la funcion 1");
  console.log("Esto tambien");
  function2();
  console.groupEnd("Funcion 1");
}

console.log("Empezamos");
function1();


// Console count ables to count a number of times.
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
