// This modules (moment) ables us work to dates.
// JavaScript has libraries for this but.. isn't well for this lol.

const moment = require("moment");

let ahora = moment();
// Watch the today date.
console.log(ahora);

// Changing the format of the date.
console.log(ahora.format('YYYY/MM/DD - HH:mm'))
