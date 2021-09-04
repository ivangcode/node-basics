// STREAM TO READ.
const fs = require("fs");
const stream = require("stream");
const util = require("util");
// The place where we stored the data received.
let data = "";

// This will be our entrance.
let readableStream = fs.createReadStream(__dirname + "/input.txt");
// To set the encoding of a string.
readableStream.setEncoding("UTF8");

// .on(event, the listener)
readableStream.on("data", function (chunk) {
  // We're assigning chunks to the data.
  // If this data would be bigger this method would be useful.
  data += chunk;
});
// When the stream ends, we're gonna take a look when the loaded was finished.
readableStream.on("end", function () {
  console.log(data);
});


// STREAM TO WRITE
// We're gonna make received and read a data.

// This gonna create a string for transfrom (read and write).
const Transform = stream.Transform;

// Function to transform to mayus.
function Mayus() {
  Transform.call(this);
}
// Mayus bring all that it needs from Transform.
util.inherits(Mayus, Transform);
// Creating the transformation.
Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};
// With this I have the transform created already.
let mayus = new Mayus();
// Pide is used to take from a site to other.
readableStream
  .pipe(mayus)
  .pipe(process.stdout);
