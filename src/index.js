const express = require('express')
const path = require('path');

const app = express();

// app.get(route, callback)

console.log(__dirname);
console.log(path.join(__dirname, '../public'));
const staticpath = path.join(__dirname, '../public');

app.use(express.static(staticpath));


app.get("/", (req, res) => {
    res.send("hello from the express")
})

app.get("/about", (req, res) => {
    res.send("hello from the express about page")
})


app.listen(8000, () => {
    console.log("listening on 8000 port")
})