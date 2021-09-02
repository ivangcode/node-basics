// Now all this done, we can execute modules of c++

const addon = require("./build/Release/addon");

console.log(addon.hola());
