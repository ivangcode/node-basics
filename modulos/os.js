const os = require("os");
// The OS module ables you to access to many things of a very low level.
// Knowing the architecture of the OS.
console.log(os.arch());
// Info about your platform, in my case I'm in Linux.
console.log(os.platform());

// Take a look to the cores of your CPU.
console.log(os.cpus());

// All the errors and the signals of the system.
console.log(os.constants);


// Free space in RAM.
console.log(os.freemem());

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));


// Consult the total RAM.
console.log(os.totalmem())

// Access to the directory.
console.log(os.homedir())
// Temporal files.
console.log(os.tmpdir())
// Machine host to export.
console.log(os.hostname())
// Red Interfaces.
console.log(os.networkInterfaces())
