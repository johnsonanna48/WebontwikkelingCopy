const express = require('express');
const ejs = require('ejs');



const app = express();


app.use(express.static('public'))
app.get("port", 3000);
app.listen(app.get("port"), () => {
    console.log(`the webapplication is listening on http://localhost:${app.get("port")}`);
});

let movies : Movie[] = [
    {name: "The Matrix", myScore: 90},
    {name: "Pulp Fiction", myScore: 100},
    {name: "Monster Hunter", myScore: 5},
    {name: "Blade Runner", myScore: 100}
];