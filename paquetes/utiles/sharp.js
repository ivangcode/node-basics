// How to modify an image?
// we're gonna use the library: sharp
// this libray has a lot of functions.

const sharp = require("sharp");


// We're resizing an image, extracting its colors and exporting it as resize.png.
sharp("original.png")
  .resize(80)
  .grayscale()
  .toFile("resized.png");
