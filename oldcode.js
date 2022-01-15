const express = require('express')
const path = require('path');
const hbs = require("hbs")
const app = express();
const requests = require("requests");


// console.log(path.join(__dirname, '../public/staticsite'));
// middleware
// const pathsite = path.join(__dirname, '../public/staticsite');
const pathsite = path.join(__dirname, '../public');
const templatepath = path.join(__dirname, '../template/views');
const partialspath = path.join(__dirname, '../template/partials');
// set template engine
app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialspath)
app.use(express.static(pathsite));

// template engine route
app.get("/", (req, res) => {
    res.render("index", {
        name: "shubham"
    })
})
app.get("/about", (req, res) => {
    console.log(req.query.name)
    res.render("about", {
        name: "shubham",
        name2: req.query.name
    })
})
app.get("/about/weather", (req, res) => {
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=53e026615dee8ba0f9291a3216e2c095`)
        .on('data', (chunk) => {
            const wdata = JSON.parse(chunk);
            const arrdata = [wdata];
            // console.log(arrdata[0].main.temp)
            console.log(`City Name is ${arrdata[0].name} And Temperature is ${arrdata[0].main.temp}`)
            res.write(`City Name is ${arrdata[0].name} And Temperature is ${arrdata[0].main.temp}`);
        })
        .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
            console.log('end');
        });
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

app.listen(8000, () => {
    console.log("listening on 8000 port")
    console.log("http://localhost:8000")
})


// nodemon src/vdo5.js -e js,hbs