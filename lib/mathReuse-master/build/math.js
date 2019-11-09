"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// MathReuse Class
var MathReuse =
  /*#__PURE__*/
  (function() {
    function MathReuse() {
      _classCallCheck(this, MathReuse);
    }

    _createClass(MathReuse, [
      {
        key: "add",
        value: function add(num1, num2) {
          //takes 2 numbers and returns their sum
          try {
            //Make sure the array is not empty and exists
            if (isNaN(num1) || isNaN(num2)) {
              return "NOT NUMBER: CHECK INPUTS";
            } else {
              //add the numbers
              return num1 + num2;
            }
          } catch (error) {
            return error;
          }
        }
      },
      {
        key: "multiply",
        value: function multiply(num1, num2) {
          //takes 2 numbers and returns their product
          try {
            //Make sure the numbers are numbers
            if (isNaN(num1) || isNaN(num2)) {
              return "NOT NUMBER: CHECK INPUTS";
            } else {
              //muliple the numbers
              return num1 * num2;
            }
          } catch (error) {
            return error;
          }
        }
      },
      {
        key: "subtract",
        value: function subtract(num1, num2) {
          //takes 2 numbers and returns their difference of num1 - num2
          try {
            //Make sure the numbers are numbers
            if (isNaN(num1) || isNaN(num2)) {
              return "NOT NUMBER: CHECK INPUTS";
            } else {
              //subtract the numbers
              return num1 - num2;
            }
          } catch (error) {
            return error;
          }
        }
      },
      {
        key: "divide",
        value: function divide() {
          var numerator =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var denominator =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0;
          //takes 2 numbers numberator and denominator and returns a quotient
          var quotient;

          try {
            //Make sure the denomintor is not 0
            if (denominator == 0) {
              return "ERROR: DIVISION BY ZERO NOT ALLOWED CHECK YOUR INPUTS";
            } else {
              //Divide the numbers
              var _quotient = numerator / denominator; // check the quotient to make sure it is a number

              if (isNaN(_quotient)) return "NOT INTEGER: CHECK INPUTS"; //return the sum

              return _quotient;
            }
          } catch (error) {
            return error;
          }
        }
      },
      {
        key: "exp",
        value: function exp() {
          var base =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var factor =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0;
          //takes a base and a factor and returns product
          var product = base;

          try {
            // check the inputs to make sure they are numbers
            if (isNaN(base) || isNaN(factor)) {
              return "NOT A NUMBER: CHECK INPUTS";
            } else {
              return Math.pow(base, factor);
            }
          } catch (error) {
            return error;
          }
        }
      },
      {
        key: "sqrroot",
        value: function sqrroot(radicand) {
          //takes a nonnegative real number (radicand) and returns its principal square root
          try {
            //Make sure the number exists and is a number
            if (isNaN(radicand)) {
              return "NOT A NUMBER: CHECK INPUTS";
            } else if (radicand < 0) {
              return "RADICAND MUST BE A NONNEGATIVE REAL NUMBER";
            } else {
              //Square Root the radicand
              return this.exp(radicand, 1 / 2);
            }
          } catch (error) {
            return error;
          }
        }
      },
      {
        key: "toBaseX",
        value: function toBaseX(number) {
          var base =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 10;

          //takes an array of numbers and returns it converted to the designated base
          try {
            //Make sure the number exists and is a number
            if (isNaN(number)) {
              return "NOT A NUMBER: CHECK INPUTS";
            } else {
              //Square Root the radicand
              return number.toString(base);
            }
          } catch (error) {
            return error;
          }
        }
      }
    ]);

    return MathReuse;
  })();

var _default = MathReuse;
exports["default"] = _default;
