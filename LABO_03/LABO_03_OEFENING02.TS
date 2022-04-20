interface Calculation {
    (a: number, b:number):number
}

const mult : Calculation = (a,b) => {
    return a*b;
}

const add : Calculation =(a,b) => {
    return a+b;
}

const printCalculationResult = (a: number, b: number, func: Calculation) => {
    console.log(func(a,b));
}