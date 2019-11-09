const MathReuse = require("../../../build/math").default;

var mathRe = new MathReuse();

var addedNum5 = mathRe.add(5, 5);
console.log("5+5= "+addedNum5);

var addedNum0 = mathRe.add(0,1);
console.log("0+1= "+addedNum0);

var addedNumNeg = mathRe.add(-5,-10);
console.log("-5+(-10)= "+addedNumNeg);

var addnotnum = mathRe.add("Hello", +2);
console.log("Hello+2= "+addnotnum);
