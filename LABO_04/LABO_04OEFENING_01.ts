// interface Callback {
//     (n: number): void
// }

const getRandom = () : Promise<Number>=> {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(Math.floor(Math.random() * 100));},1000);
            });
    

         }
//     setTimeout(() => {
//         callback(Math.floor(Math.random() * 100))
        
//     }, 1000);
// }



getRandom().then((result) => {
    console.log(`The number was ${result}`)
});
