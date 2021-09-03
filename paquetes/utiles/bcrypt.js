/* We want a password this password must be cyphred.
  - We'll going to use a package named bcrypt.js
*/
const bcrypt = require("bcrypt");

const password = "1234Segura!";

bcrypt.hash(password, 5, function (err, hash) {
  console.log(hash);

  bcrypt.compare(password, hash, function (err, res) {
    console.log(res);
  });
});
