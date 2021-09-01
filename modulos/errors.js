// How do we can work with errors in synchronism?

function otraFuncion() {
  seRompe();
}
function seRompe() {
  return 3 + z;
}
try {
  // Executes the code.
  otraFuncion();
} catch (err) {
  // Captures and records the error.
  console.error("Vaya, something is broken.", err.message);
}

// "An error in Node brokes totally our code."

// Working with async functions with errors.
/* Being an async function Node is working this script in another thread. This is because Node works the asynchronism like that.

We can fix it, If we use the try catch into the async function, in this case specifically inside the setTimeout.
*/
function seRompeEnAsincronia(cb) {
  // Will be working with callbacks.
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.log("An error has ocurred.");
      cb(err);
    }
  }, 3000);
}
try {
  seRompeEnAsincronia(function (err) {   
    console.log('Este es el error:', err.message);
  });
} catch (err) {
  console.error("Error found it", err.message);
}

console.log('Esto de aqui pasa al final.')
