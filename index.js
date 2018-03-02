const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const hbs = require('hbs')
const methodOverride = require("method-override");
const session = require('express-session')
const passport = require('passport')
const repoController = require('./controllers/repolink')
const userController = require('./controllers/user')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.render('index')
})
app.use(cookieParser())
app.use(bodyParser())

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use(function (req, res, next) {
    res.locals.currentUser = req.user
    next()
})
app.use(session({secret: 'secret'}))

app.use(methodOverride("_method"));
app.use('/repolinks', repoController)
app.use('/user', userController)

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
