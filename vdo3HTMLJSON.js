const express = require('express')
const app = express();
const port = 8000;

// app.get(route, callback)

app.get("/", (req, res) => {
    res.send("hello home page")
})

app.get("/about", (req, res) => {
    res.write("<h1>hello about page</h1>");
    res.write("<h2>hello about page</h2>");
    res.status(200).send();
})

app.get("/contact", (req, res) => {
    res.send("hello contact page")
})

app.get("/temp", (req, res) => {
    res.send({
        id: 1,
        name: "shubham"
    })
})

app.get("/temp2", (req, res) => {
    res.send([{
        id: 1,
        name: "shubham"
    },
    {
        id: 2,
        name: "sutar"
    }])
})

app.get("/temp3", (req, res) => {
    res.json([{
        id: 1,
        name: "shubham"
    },
    {
        id: 2,
        name: "sutar"
    }])
})


app.listen(port, () => {
    console.log("listening on 8000 port")
})