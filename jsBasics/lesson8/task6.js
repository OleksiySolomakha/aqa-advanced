import chalk from "chalk";

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

let newNumbersList = [...numbersList];

// take this idea from teory example
// https://lms.ithillel.ua/groups/68d1627a9aa2669fd8d2c25f/lessons/68d1627a9aa2669fd8d2c275?article_id=68f7661eea084defac3cf045

function sortByNumber() {
    return (a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    };
}

newNumbersList.sort(sortByNumber());

console.log(chalk.bgMagenta('Was numbersList =', numbersList));
console.log(chalk.bgGreenBright('After sort =', newNumbersList));