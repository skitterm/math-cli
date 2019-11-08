const minimist = require("minimist");

// following basic guidelines of how to set up command-parsing
// https://timber.io/blog/creating-a-real-world-cli-app-with-node/
module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const command = args._[0];
  const value = args._[1];
  if (typeof value === "undefined") {
    console.error("No value provided");
    return;
  }

  switch (command) {
    case "years-until-200":
      console.log(`You will be 200 in ${200 - value} years`);
      break;
    case "dog-years":
      console.log(`Age in dog years: ${value / 7}`);
      break;
    case "hogwarts-grade-to-age":
      console.log(
        `Assuming you started Hogwarts at age 11, you are ${11 +
          value} years old`
      );
      break;
    case "decimal-to-percent":
      console.log(`${value * 100}%`);
      break;
    default:
      console.error("Command not found");
      break;
  }
};
