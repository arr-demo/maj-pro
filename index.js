const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express()
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')
const publicPath = path.join(__dirname, './public')
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', viewsPath)
app.use(express.static(publicPath))


//Homepage
app.get('/', (req, res) => {
    res.render('index')
})

//Sign Up page
app.get('/register', (req, res) => {
    res.render('register')
})

//Login Page
app.get('/login', (req, res) => {
    res.send('Hello, this is the Login Page')
})

//Leaderboard Page
app.get('/ranks', (req, res) => {
    res.render('ranks')
})

//Problem page
app.get('/problem/:id', (req, res) => {
    res.send('Hello, this is the Problem page.')
})

app.listen(port, () => {
    console.log('Listening to '+port);
})

