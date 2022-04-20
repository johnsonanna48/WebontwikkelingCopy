interface Testfunction {
    (n:number): boolean
}


const isOdd :Testfunction= (n) => {
     return (n % 2 != 0 );
}

const isEven : Testfunction = (n) => {
    return (n% 2 ==0);
}

 const isGreaterthan5 : Testfunction = (n) => {
     return n > 5;
 }

 const isPositive : Testfunction = (n) => {
     return n <= 0;
 }

 const atLeastTwo = (getallen: number[], func: Testfunction) => {
     let count : number = 0;
     for (let getal of getallen){
         if (func(getal)){
             count++;
         }

         
     }

     return (count >=2)
     
     }

 
