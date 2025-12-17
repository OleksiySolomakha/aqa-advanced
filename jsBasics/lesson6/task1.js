import chalk from "chalk";

function squareDeclaration(width, height) {
    return width * height
}

console.log(chalk.bgBlue('squareDeclaration: ', squareDeclaration(11,10)))

let squareExpression = function(width, height) {
    return width * height   
}

console.log(chalk.bgYellow('squareExpression: ', squareExpression(33,5)))

let squareArrow = (width, height) => width * height;

console.log(chalk.bgGreen('squareArrow: ', squareArrow(20,15)))

