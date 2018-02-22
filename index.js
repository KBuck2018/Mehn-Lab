const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const hbs = require('hbs')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(4000, () => {
    console.log('server running')
})