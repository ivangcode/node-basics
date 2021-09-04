/* We want a password this password must be cyphred.
  - We'll going to use a package named bcrypt.js
*/
const bcrypt = require("bcrypt");


// This may come from an https request or an user entrance. The password won't be plane text.
const password = "1234Segura!";

// Generates an async hash. (pass, timesExec, cb)
bcrypt.hash(password, 5, function (err, hash) {
  console.log(hash);

// So, this changes everytime. How do we validate if this stuff is still being the password?https://github.com/AreYouIvan/node-course/tree/main/modulos/nativos

  bcrypt.compare(password, hash, function (err, res) {
    console.log(res);
  });
});
