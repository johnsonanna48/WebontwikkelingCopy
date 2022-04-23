const express = require('express');
const ejs = require('ejs');



const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

let images : string[] = [
"images/cat1.jpeg",
"images/cat2.jpeg",
"images/cat3.jpeg",
"images/cat4.jpeg",
"images/cat5.jpeg",
"images/cat6.jpeg",
"images/cat7.jpeg",
"images/cat8.jpeg",
"images/cat9.jpeg",
"images/cat10.jpeg",
"images/cat11.jpeg",


]

app.get("/", (req,res)=> {
app.render("index",
{images:images});
});


app.set("port", 3000)
app.listen(app.get("port"), () => {
    console.log(`the webapplication is listening on http://localhost:${app.get("port")}`);


});



