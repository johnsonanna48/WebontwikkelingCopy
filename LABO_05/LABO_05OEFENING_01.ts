//HelloExpress

// const express = require('express');

import express, { response } from 'express';
import { request } from 'http';
import ejs, { name } from 'ejs';
import axios from 'axios';
const app = express();



interface person {
    name: string,
    age: number,
    profilepic: string
}



const thisisme: person = {
    name:"anna Johnson",
    age:23,
    profilepic: "https://randompicturegenerator.com/img/picture-generator/57e0d144495bb10ff3d8992cc12c30771037dbf85254794e722a7cd09749_640.jpg"
}


app.get('/whoami.json', (_request, response) =>{
    response.json(thisisme);
})

app.get("/whoami", (_request,response) => {
    response.render("whoami", thisisme)
})

app.set('view engine','ejs');
app.set("port", 3000);

app.get("/",
(_request: any,response: any) =>{
response.send(`<html>
<body>
<h1>Hello World</h1>
<p> lorem
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Orci eu lobortis elementum nibh tellus molestie nunc. Nulla malesuada pellentesque elit eget. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Sed euismod nisi porta lorem mollis. Ornare quam viverra orci sagittis eu. Egestas sed tempus urna et pharetra. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Tortor posuere ac ut consequat semper viverra. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. At consectetur lorem donec massa sapien. Consequat id porta nibh venenatis cras. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. A pellentesque sit amet porttitor eget dolor. Sit amet justo donec enim diam vulputate ut pharetra. Nisl pretium fusce id velit. Accumsan lacus vel facilisis volutpat est. Erat pellentesque adipiscing commodo elit at imperdiet.
</p>
</body>

</html>

`)
}
)
app.listen(app.get("port"),() =>{
console.log(`Http://localhost:${app.get("port")} has started`);
});


app.get("/pikachujson",  async(request, response) => {
     let pokeResponse = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");

     response.json(pokeResponse.data);
})

app.get("/Pikachuhtml", async(request,response) =>
{
    let pokeResponse = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
   
    response.render('pokemon',{
        name: pokeResponse.data.name,
        id: pokeResponse.data.id,
        weight: pokeResponse.data.weight,
        frontImage: pokeResponse.data.sprite.front_default,
        backimage: pokeResponse.data.sprite.back_default


    })

})





