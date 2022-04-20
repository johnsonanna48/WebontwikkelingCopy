
// Slowsum

const Slowsum = (a: number, b:number)=> {
    return new Promise<number>((resolve, reject) =>{
        setTimeout(() => {
            resolve(a+b);
        }, 1000)
    });
}

const slowDiv = (a: number, b: number) => {
    return new Promise <Number> ((resolve, reject) => {
        if (b= 0){
            reject("You cannot divide by zero");
        }
        setTimeout(() => {
            resolve(a/b);
        }, 2000);
    })
}

const SlowMult = (a: number, b:number)=> {
    return new Promise<number>((resolve, reject) =>{
        setTimeout(() => {
            resolve(a*b);
        }, 1500)
    });
}

Slowsum(1,5).then((result) => {
SlowMult(result, 2).then((MultResult) => {
    console.log(MultResult);});
});

slowDiv(5,0).then((result) => {
    console.log(`5/0 = ${result}`);
}).catch((reason) => {
    console.log(reason);
})
