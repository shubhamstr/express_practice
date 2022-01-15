const express = require('express')
const app = express();
const port = 8000;

// app.get(route, callback)

app.get("/", (req, res) => {
    res.send("hello home page")
})

app.get("/about", (req, res) => {
    res.send("hello about page")
})

app.get("/contact", (req, res) => {
    res.send("hello contact page")
})

app.get("/temp", (req, res) => {
    res.send("hello temp page")
})


app.listen(port, () => {
    console.log("listening on 8000 port")
})