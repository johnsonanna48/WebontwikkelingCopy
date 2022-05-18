

import Express from "express";
import Ejs from 'ejs';


const app = Express();

interface Movie{
    name: string,
    myScore: number
}

let movies: Movie[] = [
    {name: "The Matrix", myScore: 90},
    {name: "Pulp Fiction", myScore: 100},
    {name: "Monster Hunter", myScore: 5},
    {name: "Blade Runner", myScore: 100}

]

app.set("port", 3000);
app.listen(app.get("port"), () =>{
    console.log(`The web application is listening at port ${app.get("port")}
    `);
})
app.use(Express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/movie", (req, res) => {
    res.render("movie", {
        movies: movies
    })
})

app.get("/movies/:id", (req, res) => {
    let id : number = parseInt(req.params.id);
    let movie: Movie = movies[id];
    res.render("movie1", {
        movie:movie
    })
    if(!movie) {
        res.render("error");
        return;
    }


  
})





















// interface Movie {
//     name: string,
//     myScore: number
// }

// let movies : Movie[] = [
//     {name: "The Matrix", myScore: 90},
//     {name: "Pulp Fiction", myScore: 100},
//     {name: "Monster Hunter", myScore: 5},
//     {name: "Blade Runner", myScore: 100}
// ];





