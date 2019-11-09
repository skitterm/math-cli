
import {expect} from 'chai';
import MathReuse from "../src/math";

const mathRe = new MathReuse;
let numbers5 = [5,5,5,5]; //addition = 20, subtract = -10 , multiplication = 625
let numbers_null = [];
let numbers0 = [0,1,2,3,4]; // addition = 10, subtracts = -10, multiplication = 0
let numbers_neg = [-5, -10, 5, 5]; // addition = -5, subtract = -5, multiplication = 1250
let notallnumbers = ["Hello", 2, 1, "Cheeseburger"];
let intanddbl = [1,1.5,0,1.1134];

describe("Reusable Math Library", function() {
  describe("Addition", function() {
    it("Takes 2 positive numbers and returns the value of their sum", function() {
      let addedNum5 = mathRe.add(5, 5);
      expect(addedNum5).to.equal(10);
    });
    it("Takes 2 non negative numbers and returns the value of their sum", function() {
      let addedNum0 = mathRe.add(0,1);
      expect(addedNum0).to.equal(1);
    });
    it("Takes 2 negative numbers and returns the value of their sum", function() {
      let addedNumNeg = mathRe.add(-5,-10);
      expect(addedNumNeg).to.equal(-15);
    });
    it("If the summed value is not a number return an error", function() {
      let addnotnum = mathRe.add(notallnumbers);
      expect(addnotnum).to.equal("NOT NUMBER: CHECK INPUTS");
    }); 
  });

  describe("Subtraction", function() {
    it("Takes 2 positive numbers and returns the difference", function() {
      let addedNum5 = mathRe.subtract(5,2);
      expect(addedNum5).to.equal(3);
    });
    it("Takes 2 non negative numbers and returns the difference", function() {
      let addedNum0 = mathRe.subtract(-5,-10);
      expect(addedNum0).to.equal(5);
    });
    it("If the summed value is not a number return an error", function() {
      let addnotnum = mathRe.subtract(notallnumbers);
      expect(addnotnum).to.equal("NOT NUMBER: CHECK INPUTS");
    }); 
  });

  describe("Muliplication", function() {
    it("Takes 2 positive numbers and returns the value of their product", function() {
      let addedNum5 = mathRe.multiply(5, 5);
      expect(addedNum5).to.equal(25);
    });
    it("Takes 2 non negative numbers and returns the value of their product", function() {
      let addedNum0 = mathRe.multiply(0,5);
      expect(addedNum0).to.equal(0);
    });
    it("Takes 2 negative numbers and returns the value of their product", function() {
      let addedNumNeg = mathRe.multiply(-5,5);
      expect(addedNumNeg).to.equal(-25);
      addedNumNeg = mathRe.multiply(-5,-5);
      expect(addedNumNeg).to.equal(25);
    });
    it("If the summed value is not a number return an error", function() {
      let addnotnum = mathRe.multiply(notallnumbers);
      expect(addnotnum).to.equal("NOT NUMBER: CHECK INPUTS");
    }); 
  });

  describe("Division", function() {
    it("Takes 2 numbers numerator and denominator and returns a quotient", function() {
      let addedNum5 = mathRe.divide(numbers5[0],numbers5[1]);
      expect(addedNum5, "Returned value: "+addedNum5).to.equal(1);
    });
    it("Takes 0 as the denomitor and returns an error", function() {
      let divNumZero = mathRe.divide(0,0);
      expect(divNumZero, "Returned value: "+divNumZero).to.equal('ERROR: DIVISION BY ZERO NOT ALLOWED CHECK YOUR INPUTS');
    });

    it("If the quotient is not a number return an error", function() {
      let addnotnum = mathRe.divide(notallnumbers[0],notallnumbers[1]);
      expect(addnotnum, "Returned value: "+addnotnum).to.equal("NOT INTEGER: CHECK INPUTS");
      
    }); 
  });

  describe("Exponent", function() {
    it("Takes 2 numbers base and factor and returns the exponent value", function() {
      let addedNum5 = mathRe.exp(2,2);
      expect(addedNum5, "Returned value: "+addedNum5).to.equal(4);
    });
    it("Takes 2 numbers base and factor and returns the exponent value", function() {
      let divNumZero = mathRe.exp(5,4);
      expect(divNumZero, "Returned value: "+divNumZero).to.equal(625);
    });    
    it("Takes 2 numbers base and factor: checking with factor of 1", function() {
      let addedNum5 = mathRe.exp(2,1);
      expect(addedNum5, "Returned value: "+addedNum5).to.equal(2);
    });
    it("Takes 0 as the factor and returns 1", function() {
      let divNumZero = mathRe.exp(2,0);
      expect(divNumZero, "Returned value: "+divNumZero).to.equal(1);
    });
    it("Takes -1 as the factor and returns 1/base", function() {
      let divNumZero = mathRe.exp(5,-1);
      expect(divNumZero, "Returned value: "+divNumZero).to.equal(1/5);
    });
    it("Takes a factor  0 > factor < 1", function() {
      let divNumZero = mathRe.exp(4,.5);
      expect(divNumZero, "Returned value: "+divNumZero).to.equal(2);
    });
    it("Takes a non-integer factor", function() {
      let divNumZero = mathRe.exp(4,.33);
      expect(divNumZero, "Returned value: "+divNumZero).to.equal(1.5800826237267545);
    });
    it("Takes a non-integer negative factor", function() {
      let divNumZero = mathRe.exp(4,-2.33);
      expect(divNumZero, "Returned value: "+divNumZero).to.equal(0.03955489356157124);
    });
    it("Takes negative factor and returns 1/base^factor", function() {
      let divNumZero = mathRe.exp(5,-4);
      expect(divNumZero, "Returned value: "+divNumZero).to.equal(.0016);
    });    
    it("If the base or factor is not a number", function() {
      let addnotnum = mathRe.exp(notallnumbers[0],notallnumbers[1]);
      expect(addnotnum, "Returned value: "+addnotnum).to.equal("NOT A NUMBER: CHECK INPUTS");
    }); 
  });
  
  describe("Square Root", function() {
      it("Takes a nonnegative number (radicand) and returns square root", function() {
        let addedNum5 = mathRe.sqrroot(4);
        expect(addedNum5, "Returned value: "+addedNum5).to.equal(2);
        addedNum5 = mathRe.sqrroot(16)
        expect(addedNum5, "Returned value: "+addedNum5).to.equal(4);
      });
      it("Takes a 1 and 0 (radicand) and returns 1 and 0", function() {
        let divNumZero = mathRe.sqrroot(1);
        expect(divNumZero, "Returned value: "+divNumZero).to.equal(1);
        divNumZero = mathRe.sqrroot(0);
        expect(divNumZero, "Returned value: "+divNumZero).to.equal(0);
      });    
      it("Takes a -1 and -5 (radicand) and errors", function() {
        let addedNum5 = mathRe.sqrroot(-1);
        expect(addedNum5, "Returned value: "+addedNum5).to.equal("RADICAND MUST BE A NONNEGATIVE REAL NUMBER");
        addedNum5 = mathRe.sqrroot(-5);
        expect(addedNum5, "Returned value: "+addedNum5).to.equal("RADICAND MUST BE A NONNEGATIVE REAL NUMBER");
      });
      it("Takes a non number and returns and error", function() {
        let addnotnum = mathRe.sqrroot(notallnumbers[0]);
        expect(addnotnum, "Returned value: "+addnotnum).to.equal("NOT A NUMBER: CHECK INPUTS");
      }); 

  });


  describe("Convert Number to a different Base", function() {
    it("Take a base 10 number and returns a string converted to specified base", function() {
      let addedNum5 = mathRe.toBaseX(4, 2);
      expect(addedNum5).to.equal('100');
    });
    it("Take a base 10 number returns returns a string converted to specified base", function() {
      let addedNum0 = mathRe.toBaseX(144, 8);
      expect(addedNum0).to.equal('220');
    });
    it("Take a base 10 number returns returns a string converted to specified base", function() {
      let addedNum0 = mathRe.toBaseX(-144, 2);
      expect(addedNum0).to.equal('-10010000');
    });

    it("Take a base 10 number returns returns a string converted to specified base", function() {
      let addedNum0 = mathRe.toBaseX(144, 2);
      expect(addedNum0).to.equal('10010000');
    });

    it("Take a base 10 number returns returns a string converted to specified base", function() {
      let addedNum0 = mathRe.toBaseX(144, 16);
      expect(addedNum0).to.equal('90');
    });

    it("Take a base 10 number returns returns a string converted to specified base", function() {
      let addedNum0 = mathRe.toBaseX(144, 4);
      expect(addedNum0).to.equal('2100');
    });

    it("If the number is not a number return an error", function() {
      let addnotnum = mathRe.toBaseX(notallnumbers);
      expect(addnotnum).to.equal("NOT A NUMBER: CHECK INPUTS");
    }); 
  });

});
