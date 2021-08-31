// We must to call using require.
const fs = require("fs");


// How to read files using File System.
function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

leer(__dirname + "/archivo.txt", console.log);
// How to write a file.
function escribir (ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if(err) {
      console.error('No he podido escribir.')
    } else {
      console.log('Se ha escrito el archivo.')
    }
  })
}

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
// How to delete or unlink a file.
// Unlink 'cause unlink the nodes of the files.
function borrar (ruta, cb) {
  fs.unlink(ruta, cb);
}

borrar(__dirname + '/archivo1.txt', console.log);