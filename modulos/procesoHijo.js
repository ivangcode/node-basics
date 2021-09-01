// This is an internal Library.

const { exec, spawn } = require("child_process");
/* EQUAL
const exec = require("child_process").exec; */

// This is how we obtain the execution of another file in NodeJS.
// exec("node modulos/console.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

// How to use Spawn.

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("El proceso termino.");
  console.log(proceso.killed)
});
