const express = require('express')


const app = express();

// app.get(route, callback)

app.get("/", (req, res) => {
    res.send("hello from the express")
})

app.get("/about", (req, res) => {
    res.send("hello from the express about page")
})


app.listen(8000, () => {
    console.log("listening on 8000 port")
})