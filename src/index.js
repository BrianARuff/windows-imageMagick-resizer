const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;
const oldImageDirectory = path.join(__dirname, "oldImages");



function resizeImages(oldImagePath=[__dirname], newImagePath=[__dirname], desiredImageOutputSize=["32x32"]) {
  fs.readdir(oldImageDirectory, (err, files) => {
    for(let i = 0; i < files.length; i++) {
      exec(`magick ${oldImagePath[i]} -resize ${desiredImageOutputSize[i]} ${newImagePath[i]}`, (error, stdout, stderr) => {
        if (err) {
          throw new Error(`exec error ${error.message}`);
        } else {
          console.log(stderr, stdout);
        }
      });
    }
  })
}

module.exports = resizeImages;