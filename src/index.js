const minimist = require("minimist");
const MathReuse = require("../lib/mathReuse-master/build/math").default;

// following basic guidelines of how to set up command-parsing
// https://timber.io/blog/creating-a-real-world-cli-app-with-node/
module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const command = args._[0];
  if (typeof command === "undefined") {
    console.error("No command provided");
    return;
  }

  const value = args._[1];
  if (typeof value === "undefined") {
    console.error("No value provided");
    return;
  } else if (typeof value !== "number") {
    console.error("Value is not a number");
    return;
  }

  const mathCalc = new MathReuse();

  switch (command) {
    case "years-until-200":
      const subtractedFigure = mathCalc.subtract(200, value);
      console.log(`You will be 200 in ${subtractedFigure} years`);
      break;
    case "dog-years":
      const dividedFigure = mathCalc.divide(value, 7);
      console.log(`Age in dog years: ${dividedFigure}`);
      break;
    case "hogwarts-grade-to-age":
      const addedFigure = mathCalc.add(11, value);
      console.log(
        `Assuming you started Hogwarts at age 11, you are ${addedFigure} years old`
      );
      break;
    case "decimal-to-percent":
      const multipliedFigure = mathCalc.multiply(100, value);
      console.log(`${multipliedFigure}%`);
      break;
    default:
      console.error("Command not found");
      break;
  }
};
