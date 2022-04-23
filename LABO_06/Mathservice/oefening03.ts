import { Express, response } from "express";
import { request } from "http";
import { json } from "stream/consumers";

const app = Express();

app.set("port",3000);

app.get("/:operator",(request: any, response: any) =>{
//    response.send(request.params.operator); 
 
   let a: number = parseInt(request.query.a as string);
   let b: number = parseInt(request.query.b as string);
   let operator : string = request.params.operator;
   response.send(`a= ${a} b= ${b}`);

   if(isNaN(a) || isNaN(b)) {
       response.status(400).json("error": "both query parameters (a,b) have to be speciefied.");
   }else{
   let result : number = 0;
   switch(operator){
        case "add": 
        result = a + b;
        break;
        case "mult":
            result = a * b;
        break; 
        case "div" : 
        if (b == 0) {
            response.status(400).json({
                "error": "b cannot be zero"
            });
            return;
        }
        result = a / b;
        break;
        case "min": 
        result = a - b;

        break;
   }
   response.json({
       "result": result
   });

}

app.listen(app.get("port"), () => {
console.log(`web application started at http://localhost:${app.get("port")}`);})



