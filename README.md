# math-cli

A simple command-line application that performs some fun math.

## Setup

These steps assume you have Node.js and NPM installed on your machine.

1. Clone this repo
1. At the repo's root, run `npm install`
1. Run all commands at the project root

## Commands

Each command consists of 3 parts: This tool's name (`math`), the command (i.e. `decimal-to-percent`), and the parameter (i.e. `.24`). The tool will output the result on the next line.

### `years-until-200` (subtraction)

Calculates how many years until you can celebrate your 200th birthday.

#### Parameter

Your current age

#### Example

```
math years-until-200 55
You will be 200 in 145 years
```

### `dog-years` (division)

Calculates how old you are in (simplified) dog years

#### Parameter

Your current age

#### Example

```
math dog-years 35
Age in dog years: 5
```

### `hogwarts-grade-to-age` (addition)

Calculates your age based off of your year at Hogwarts School.

#### Parameter

Your current year at Hogwarts School

#### Example

```
math hogwarts-grade-to-age 4
Assuming you started Hogwarts at age 11, you are 15 years old
```

### `decimal-to-percent` (multiplication)

Converts a decimal number to its percent form.

#### Parameter

A decimal number

#### Example

```
math decimal-to-percent .24
24%
```

## Reuse Experience

I used the excellent [mathReuse](https://github.com/thh0003/mathReuse) library for the arithmetic calculations. I was a little confused at which version of the math file (es5 or es6) I should use, and how to import it. After looking in the `/examples` folder, I found a [sample](https://github.com/thh0003/mathReuse/blob/master/examples/ES5/node-server/app.js) that showed how to use the file with Node.js (I'm new to Node, so some of this confusion may have been my lack of experience bringing in libraries).

Due to the turnkey condition of the library, I was able to achieve black-box reuse.
