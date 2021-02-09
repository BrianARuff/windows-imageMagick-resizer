const fs = require("fs");
const exec = require("child_process").exec;



function resizeImages(startingPoint="./", oldImagePath=[__dirname], newImagePath=[__dirname], desiredImageOutputSize=["32x32"]) {
  fs.readdir(startingPoint, (err, files) => {
    for(let i = 0; i < oldImagePath.length; i++) {
      exec(`magick ${oldImagePath[i]} -resize ${desiredImageOutputSize[i]} ${newImagePath[i]}`, (error, stdout, stderr) => {
        if (error) {
          throw new Error(error);
        } else {
          if (err) {
            throw new Error(err);
          } else {
            console.log("Files resized and renamed");
          }
        }
      });
    }
  })
}

module.exports = resizeImages;