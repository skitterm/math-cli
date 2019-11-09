# MathReuse - Reusable Math Library

### West Virginia Univeristy - SENG 560 - Software Reuse - Programming Assignment #1

##### MathReuse - Description

MathReuse is a Javascript Class which provides simple math functions (Add, Subtract, Multiply, Divide, Exponent, Square Root, Convert from Base 10 to other Bases).  It was written using ES6 syntax and has been tested for Node using Mocha-Chai and for the browser.  

The main ES6 class file is math.js and is located in the "src" subfolder. The test script used to test the ES6 version is located in the "test" subfolder of this repository.  There is an example of how to use the class in the browser in the "examples" folder.  It is also available for use at: https://www.pgesoftware.com/MathReuse/examples/

I also provided an ES5 compatible build using Babel v7 which is located in the "build" subfolder.

#### Repository Structure and File Description
1. build/math.js - ES5 version of the class produced by Babel V7
2. examples/ES5/browsers-client/index.html - ES5 Browser/Client Example
3. examples/ES5/node-server/app.js - ES5 NodeJS file which calls the class library
4. examples/ES6/browsers-client/index.html - ES6 Browser/Client Example
5. examples/ES6/browsers-client/main.js - ES6 Browser/Client Example
6. examples/ES6/node-server/app.js - ES6 NodeJS file which calls the class library
7. examples/ES6/node-server/start.js - ES6 NodeJS file which runs the app through the Babel Register (I know this is not ideal, but I didn't want to rename the js file to mjs and cause confusion)
8. node_modules - NodeJS dependency modules (don't change these)
9. src/math.js - Actual Class file - Source of Truth
10. test/mathSpec.js - Mocha Chai Unit test file - run from terminal with command "npm test"
11. package.json - Configuration file for NodeJS
12. README.md - This file

#### General Note on Javascript Numbers.  

> Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc. JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard. This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

#### Class Functions
1. add (num1, num2) - takes 2 numbers and returns their sum
2. multiply (num1, num2) - takes 2 numbers and returns their product
3. subtract (num1, num2) - takes 2 numbers and returns their difference of num1 - num2
4. divide (numerator=0, denominator=0) takes 2 numbers numerator and denominator and returns a quotient
5. exp (base=0, factor=0) - takes a base and a factor and returns product
6. sqrroot(radicand) - takes a nonnegative real number (radicand) and returns its principal square root
7. toBaseX(number,base=10) - takes a number and returns a string converted to the designated base.  Javascript only has one Number "type".

#### Class Instantiation Notes
1. ES6 
    - Browser ES6 - I have included an example of using the Class in the folder examples->browsers-client. Also located at https://www.pgesoftware.com/MathReuse/examples/ If you are going to use the ES6 Class there are a few things you will need todo:
        - In your HTML file you must use the script attribute "type" of "module" this tells the browser it is a ES6 module. 
        
        > <script type="module" src="main.js"></script>


        - Because you are using the module type, the scope of the script is contained to your local javascript script tag or file.  Not Javascripts "Global" scope as in ES5.  So any listeners/mutations of the DOM need to be made within your script tag or JS file.
        - Use import MathReuse from '../src/math.js' to import the class into your script tag or JS file
    - Node.js - I have included an example of using the Class in the folder examples->ES6->node-server
        - As you can see in the package.json you will need to install (@babel/core,@babel/preset-env,@babel/register)
        - Create a JS file which requires your application to start using @babel/register.
        - To start the example run  "node ./examples/ES6/node-server/start.js" from the root folder
2. ES5 - I have included an ES5 build in the "build" folder.  This was created using Babel 7.
   - Browser ES5 - I have included an example of using the ES5 converted code in the folder examples->ES5->browsers-client.  I also have it uploaded to: https://www.pgesoftware.com/MathReuse/examples/es5/browsers-client/
   - Node ES5 - I have included an example of using the ES5 convered code with Node.JS in the folder examples->ES5->node-server
3. NodeJS Notes - If you are new to NodeJS, it can be a bit confusing. I will try to include the steps to setup the environment to run the examples
    - Install Node - Instructions for getting started with node are located at: https://nodejs.org/en/download/
    - Clone the GitHub repository
    - Open a terminal
    - Change directory into the root of the Github repository
    - type "npm install" - What this does:
        - Reads the package.json file in the root of the repository and installs the necessary dependencies
    - You should then be able to run the example node files
      - ES5: node ./examples/ES5/node-server/app.js
      - ES6: node ./examples/ES6/node-server/start.js
