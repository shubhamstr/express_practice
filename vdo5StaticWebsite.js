const express = require('express')
const path = require('path');
const app = express();


console.log(__dirname);
console.log(path.join(__dirname, './public2'));
const staticpath = path.join(__dirname, './public2');

app.use(express.static(staticpath));

app.get("/", (req, res) => {
    res.send("hello from the express")
})

app.listen(8000, () => {
    console.log("listening on 8000 port")
    console.log("http://localhost:8000")
})