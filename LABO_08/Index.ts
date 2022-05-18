
import { MongoClient } from "mongodb"
const uri ="mongodb+srv://AnnaWebontwikkeling:AnnaWebontwikkeling@cluster0.ffjkq.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);


interface movie {
    name: string,
    myScore: number,
    timesViewed: number
}





let movies : movie[] = [
    {name: "The Matrix", myScore: 90, timesViewed: 10},
    {name: "Pulp Fuction", myScore: 100, timesViewed: 100},
    {name: "Monster Hunter", myScore: 5, timesViewed:1},
    {name: "Blade Runner", myScore: 100, timesViewed:30},
    {name: "Austin Powers", myScore: 80, timesViewed:10},
    {name: "Jurasic Park 2", myScore: 40, timesViewed:1},
    {name: "Ichi the Killer", myScore: 80, timesViewed:1}
];








(async() => {
    try{
        await client.connect();
        let databases = await client.db().admin().listDatabases();
        // console.log(databases.databases);

        await client.db("AnnaWebontwikkeling").collection("movies").deleteMany({});
        await client.db("AnnaWebontwikkeling").collection("movies").insertMany(movies);

    } catch(e) {
        console.error(e)
    }
    finally {
        await client.close();
    }
})();

