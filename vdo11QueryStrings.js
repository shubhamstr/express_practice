const express = require('express')
const path = require('path');
const hbs = require("hbs");
const app = express();


// middleware
const templatepath = path.join(__dirname, './template2/views');
const partialspath = path.join(__dirname, './template2/partials');

// set template engine
app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialspath)

// template engine route
app.get("/", (req, res) => {
    res.render("index", {
        // name: "shubham"
        name: req.query.name
    })
})

app.get("/about", (req, res) => {
    console.log(req.query.name);
    res.render("about", {
        // name: "shubham"
        name: req.query.name
    })
})

app.get("/", (req, res) => {
    res.send("hello from the express")
})

app.listen(8000, () => {
    console.log("listening on 8000 port")
    console.log("http://localhost:8000")
})


// nodemon vdo11QueryStrings.js -e js,hbs,css