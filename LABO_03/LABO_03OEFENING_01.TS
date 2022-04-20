//printhandler


const chalk = require("chalk");



interface PrintHandler {
    (str: string): void
}

const PrintBlue : PrintHandler = (str) => {
    console.log(chalk.blue(str));
}

const PrintRed : PrintHandler = (str) =>{
    console.log(chalk.red(str));
}

const PrintDouble : PrintHandler = (str) => {
    let output: string = "";
    for (let i: number = 0; i< str.length; i++)
    {
        output += str[i] + str[i]
    }
    console.log(output);
}


const printReverse : PrintHandler = (str) => {
    let output: string=  "";
    for (let i: number = str.length; i >=0; i--) {
        output += str[1];
    }
}