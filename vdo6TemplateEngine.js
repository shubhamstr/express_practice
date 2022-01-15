const express = require('express')
const app = express();


// set template engine
app.set('view engine', 'hbs');

// template engine route
app.get("/", (req, res) => {
    res.render("index", {
        name: "shubham"
    })
})

app.get("/", (req, res) => {
    res.send("hello from the express")
})

app.listen(8000, () => {
    console.log("listening on 8000 port")
    console.log("http://localhost:8000")
})


// nodemon src/vdo5.js -e js,hbs