import { json } from "stream/consumers";

const fetch = require('node-fetch');

fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then((response :any) => response.json())
.then((json: any) => {
console.log(json);
})


export {}