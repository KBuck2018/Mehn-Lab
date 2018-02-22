const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const hbs = require('hbs')
<<<<<<< HEAD
const methodOverride = require('method-override')

app.set('view engine', 'hbs')
const repoController = require('./controllers/repolink')
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'))
=======
const methodOverride = require("method-override");
app.set('view engine', 'hbs')
const repoController = require('./controllers/repolink')
app.use(bodyParser.urlencoded({extended: true}));
>>>>>>> origin

app.get('/', (req, res) => {
    res.render('index')
})

app.use(methodOverride("_method"));
app.use('/repolinks', repoController)

app.listen(4000, () => {
    console.log('server running')
})