# What is the purpose of this application?

- The purpose of this application is to provide a simple way to resize and rename either a single file or multiple files at once inside your javascript. Basically, you don't have to result to the web to do this.

## How to use this application.

### 1. Import app

    require("windows-imagemagick-resizer/src/index");

### 2 Call the function

    resizeImage(
      ['./src/oldImages/broom-32x32.png', './src/oldImages/broom-84x84.png'],
      ['./src/newImages/broom-48x48.jpeg', './src/newImages/broom-64x64.jpeg'],
      ['48x48', '64x64']
    );

### Explanation of the function call above

- All arguments must be wrapped in an array.
- The first argument array is a list of your old files with paths on them relative to where your \_\_dirname directory is set to. In this example my code structure is setup so that my \_\_dirname refers to the root directory of the application which is also likely what yours is set to.
- The second argument array is a list of your desired file names also with the relative path on them.
- The third and last array of arguments are your intended file resizes. For example, if you have an image that is 32x32, but you want it to be 72x72 then this is the location where you would type in '72x72'.

#### Things to look out for

- Make sure to begin each file path with a "./"
- Don't forget the extension type on the image paths.
- Arguments default to `__dirname, __dirname, 32x32`, so the root directory for the first two arguments and the size 32x32 for the last argument.
- **This project assumes that you are using windows. This package will not work on mac or linux.**

**I hope this helps someone, enjoy!**
