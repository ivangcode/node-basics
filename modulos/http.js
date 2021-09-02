const http = require("http");

// The Why: This is a router, having this we can create an http server and move us through the routers.

// To reserve a port we can use the >8080 or the >3000.

// We got to create a server so, we can do it like that. create server receives as argument a callback that receives as arguments require and response.

// The server listening.
http.createServer(router).listen(3000);

// This is our basic router. That has requirements and responses as parameters.
function router(req, res) {
  console.log("Nueva peticion");
  console.log(req.url);


  switch (req.url) {
    case '/hola':
      res.write('Hola, que tal')
      res.end();
      break;

    default:
      res.write('Error 404: No se lo que quieres.')
      res.end();
  }

  // res.writeHead(201, { "Content-Type": "text/plain" });
  // res.write("Hola! ya se como usar http en NodeJS");
  // res.end();
}

console.log("Escuchando el servidor en el puerto 3000");
