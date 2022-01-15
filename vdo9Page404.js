const express = require('express')
const path = require('path');
const hbs = require("hbs");
const app = express();


// middleware
const templatepath = path.join(__dirname, './404Page');

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

// error page 404 
app.get("*", (req, res) => {
    res.render("404", {
        err: "oops page doesn't exists"
    });
})

// error page 404 
app.get("/about/*", (req, res) => {
    res.render("404", {
        err: "oops page doesn't exists"
    });
})

app.listen(8000, () => {
    console.log("listening on 8000 port")
    console.log("http://localhost:8000")
})


// nodemon vdo9Page404.js -e js,hbs