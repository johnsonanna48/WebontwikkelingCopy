import { appendFile } from "fs";

const express = require('express');
const ejs = require('ejs');


const app = express();

app.set("port", 3000);
app.listen(app.get("port"), () =>{
    console.log(`The web application is listening at port ${app.get("port")}
    `);
});

app.use(express.static("public"));
app.set("view engine", "ejs");


let images : string[] = [
    "images/bear1.jpg",
    "images/bear5.jpg",
    "images/bear8.jpg",
    "images/bear6.jpg",
    "images/wild-bear-7.jpg",
    "images/wild-bear-13.jpg"
];

app.get('/',(req:any, res:any) => {
    res.render('index',
    {
        images:images
        
    }
    )
})





export{}