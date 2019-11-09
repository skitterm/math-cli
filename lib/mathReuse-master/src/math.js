// MathReuse Class
class MathReuse {
    add (num1, num2) {
        //takes 2 numbers and returns their sum
        try {
            //Make sure the array is not empty and exists
            if (isNaN(num1) || isNaN(num2)){
                return "NOT NUMBER: CHECK INPUTS";
            } else {
                //add the numbers
                return num1 + num2;
            }
        } catch (error) {
            return error;
        }
    }

    multiply (num1, num2) {
        //takes 2 numbers and returns their product
        try {
            //Make sure the numbers are numbers
            if (isNaN(num1) || isNaN(num2)){
                return "NOT NUMBER: CHECK INPUTS";
            } else {
                //muliple the numbers
                return num1 * num2;
            }
        } catch (error) {
            return error;
        }
    }

    subtract (num1, num2) {
        //takes 2 numbers and returns their difference of num1 - num2
        try {
            //Make sure the numbers are numbers
            if (isNaN(num1) || isNaN(num2)){
                return "NOT NUMBER: CHECK INPUTS";
            } else {
                //subtract the numbers
                return num1 - num2;
            }
        } catch (error) {
            return error;
        }
    }
    
    divide (numerator=0, denominator=0) {
        //takes 2 numbers numberator and denominator and returns a quotient
        let quotient;
        try {
            //Make sure the denomintor is not 0
            if ( denominator == 0) {
                return "ERROR: DIVISION BY ZERO NOT ALLOWED CHECK YOUR INPUTS";
            } else {
                //Divide the numbers
                let quotient = numerator/denominator;
                // check the quotient to make sure it is a number
                if (isNaN(quotient)) return "NOT INTEGER: CHECK INPUTS";
                //return the sum
                return quotient;
            }
        } catch (error) {
            return error;
        }
    }

    exp(base=0, factor=0) {
        //takes a base and a factor and returns product
        let product = base;
        try {
            // check the inputs to make sure they are numbers
            if (isNaN(base) || isNaN(factor)){
                return "NOT A NUMBER: CHECK INPUTS";
            } else {
                return Math.pow(base, factor);
            }
            
        } catch (error) {
            return error;
        }
    }

    sqrroot(radicand) {
        //takes a nonnegative real number (radicand) and returns its principal square root

        try {
            //Make sure the number exists and is a number
            if ( isNaN(radicand)){
                return "NOT A NUMBER: CHECK INPUTS";
            } else if ( radicand < 0){
                return "RADICAND MUST BE A NONNEGATIVE REAL NUMBER";
            } else {
                //Square Root the radicand
                return this.exp(radicand, (1/2));
            }
        } catch (error) {
            return error;
        }
    }

    toBaseX(number,base=10) {
        //takes an array of numbers and returns it converted to the designated base

        try {
            //Make sure the number exists and is a number
            if ( isNaN(number)){
                return "NOT A NUMBER: CHECK INPUTS";
            } else {
                //Square Root the radicand
                return number.toString(base);
            }
        } catch (error) {
            return error;
        }
    }
};

export default MathReuse