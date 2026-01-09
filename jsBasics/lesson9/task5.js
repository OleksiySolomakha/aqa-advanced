import chalk from "chalk";
let count = 1;

const users = [
    {
        name: 'Sam Stone',
        email: 'sameStone@mail.com',
        age: 22,
        car: 'Hyundai',
        model: 'i10'
    },
    {
        name: 'Vade Vilson',
        email: 'chimichangas@mail.com',
        age: 33,
        car: 'BMW',
        model: 'i10'
    },
    {
        name: 'Charlie Harper',
        email: 'harperssssss@mail.com',
        age: 41,
        car: 'Toyota',
        model: 'Prius'
    },
    {
        name: 'Samanta Chile',
        email: 'chilemissBRZ@mail.com',
        age: 19,
        car: 'Subaru',
        model: 'BRZ'
    }
];

for (let user of users) {
    console.log(chalk.bgWhite(`Users ${count} info:`))
    console.log(chalk.green(user.name));
    console.log(chalk.blue(user.email));
    console.log(chalk.yellow(user.age));
    console.log(chalk.magenta(user.car));
    console.log(chalk.red(user.model))
    count++;
};