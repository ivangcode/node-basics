// Setting the spaces with alloc.
let buffer0 = Buffer.alloc(5);
// Storing the data into the var.
let buffer1 = Buffer.from([1, 2, 3]);
// Storing the data also.
let buffer = Buffer.from("Hola");
/*
 The information always appears in hexa/binary.
  So, we'll use strings. 
*/
console.log(buffer.toString());
/* The Buffers ables us to work with the 
file over its more raw version.
 */



// Building an alphabet.
// Save the places in a var.
let abc = Buffer.alloc(26);

// Making a loop to go around the alphabet.
for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}
console.log(abc);
