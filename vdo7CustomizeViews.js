const express = require('express')
const path = require('path');
const app = express();


// middleware
const templatepath = path.join(__dirname, './viewsCustom');

// set template engine
app.set('view engine', 'hbs');
app.set('views', templatepath);

// template engine route
app.get("/", (req, res) => {
    res.render("index", {
        name: "shubham"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
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