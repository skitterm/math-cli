import MathReuse from "../../../src/math";

const mathRe = new MathReuse;

let addedNum5 = mathRe.add(5, 5);
console.log("5+5= "+addedNum5);

let addedNum0 = mathRe.add(0,1);
console.log("0+1= "+addedNum0);

let addedNumNeg = mathRe.add(-5,-10);
console.log("-5+(-10)= "+addedNumNeg);

let addnotnum = mathRe.add("Hello", +2);
console.log("Hello+2= "+addnotnum);
