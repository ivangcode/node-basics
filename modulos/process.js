process.on("beforeExit", () => {
  console.log("El proceso va a terminar!");
});

// When this happen means that we're disconnected of the Event Loop.
process.on("exit", () => {
  console.log("Ale, el proceso acabo!");
  setTimeout(() => {
    console.log("Esto no se va a ver nunca. ");
  });
});

// process.on("uncaughtRejection");
// To promises without a catch.
process.on("uncaughtException", (err, origin) => {
  console.error("Vaya se nos ha olvidado capturar los datos.");
  setTimeout(() => {
    console.log("Esto viene desde las excepciones. ");
  });
});

funcionQueNoExiste();


console.log("Esto si el error no se recoje, no sale.");
