const exec = require("child_process").exec;
const fs = require("fs");

function resizeImages(startingPoint: string = "./", oldImagePath: string[] = [__dirname], newImagePath: string[] = [__dirname], desiredImageOutputSize = ["32x32"]) {
    fs.readdir(startingPoint, {
        encoding: "utf-8",
        withFileTypes: false
    }, (err: NodeJS.ErrnoException, files: string[]) => {
        if (err) {
            throw new Error(`${err}`);
        } else {
            for (let i = 0; i < oldImagePath.length; i++) {
                exec(`magick ${oldImagePath[i]} -resize ${desiredImageOutputSize[i]} ${newImagePath[i]}`), (error: string) => {
                    if (error) {
                        throw new Error(error);
                    } else {
                        console.log("Files resized and renamed");
                    }
                }
            }
        }
    });
}

module.exports = resizeImages;