const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const hbs = require('hbs')

app.set('view engine', 'hbs')
const repoController = require('./controllers/repolink')

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/repolinks', repoController)

app.listen(4000, () => {
    console.log('server running')
})