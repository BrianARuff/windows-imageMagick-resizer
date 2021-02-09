# What is the purpose of this application?

- The purpose of this application is to provide a simple way to resize and rename either a single file or multiple files at once inside your javascript. Basically, you don't have to result to the web to do this.

## How to use this application.

### 1. Import app

    require("windows-imagemagick-resizer/src/index");

### 2 Call the function

    resizeImage(
      './src/images'
      ['./src/oldImages/broom-32x32.png', './src/oldImages/broom-84x84.png'],
      ['./src/newImages/broom-48x48.jpeg', './src/newImages/broom-64x64.jpeg'],
      ['48x48', '64x64']
    );

### Explanation of the function call above

- All arguments must be wrapped in an array with the exception of the first which is a string, and is the starting point of where node will read your image files from.
- The first is a string that is that should be typed relative to your \_\_dirname.
- The second argument array is a list of your old files with paths on them relative to where your \_\_dirname directory is set to. In this example my code structure is setup so that my \_\_dirname refers to the root directory of the application which is also likely what yours is set to.
- The third argument array is a list of your desired file names also with the relative path on them.
- The fourth and last array of arguments are your intended file resizes. For example, if you have an image that is 32x32, but you want it to be 72x72 then this is the location where you would type in '72x72'.

#### Things to look out for

- Make sure to begin each file path with a "./"
- Don't forget the extension type on the image paths.
- The first argument should be relative to your \_\_dirpath as this is the way the code finds the folder to read files from.
- **This project assumes that you are using windows. This package will not work on mac or linux.**

**I hope this helps someone, enjoy!**
