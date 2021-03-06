var exec = require("child_process").exec;
var fs = require("fs");
function resizeImages(startingPoint, oldImagePath, newImagePath, desiredImageOutputSize) {
    if (startingPoint === void 0) { startingPoint = "./"; }
    if (oldImagePath === void 0) { oldImagePath = [__dirname]; }
    if (newImagePath === void 0) { newImagePath = [__dirname]; }
    if (desiredImageOutputSize === void 0) { desiredImageOutputSize = ["32x32"]; }
    fs.readdir(startingPoint, {
        encoding: "utf-8",
        withFileTypes: false
    }, function (err, files) {
        if (err) {
            throw new Error("" + err);
        }
        else {
            for (var i = 0; i < oldImagePath.length; i++) {
                exec("magick " + oldImagePath[i] + " -resize " + desiredImageOutputSize[i] + " " + newImagePath[i]), function (error) {
                    if (error) {
                        throw new Error(error);
                    }
                    else {
                        console.log("Files resized and renamed");
                    }
                };
            }
        }
    });
}
module.exports = resizeImages;
