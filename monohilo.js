// It's very important to check the variables and functions 'cause if something gets stopped everything stops.
console.log("Hola mundo!");

let i = 0;
setInterval(() => {
  console.log(i);
  i++;

  if (i === 5) {
    console.log("forzamos el error");
    var a = a + z;
  }
}, 1000);

console.log("segunda vuelta");
