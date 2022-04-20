// Cocktails

import { Console } from 'console';
import fetch from 'node-fetch';

// fetch("")
// .then((Response: any) => Response.json())
// .then((Json:any)=>{
//     console.log(Json.drinks[0].strDrink);
// });

Promise.all([
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000').then((Response: any) => Response.json()),
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001').then((Response: any) => Response.json()),
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002').then((Response: any) => Response.json())])
    .then((results: any[]) =>{
    
    for (let result of results){
        console.log(result.drinks[0].strDrink);
    }
})

export {}
