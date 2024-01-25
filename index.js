// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
//  app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

// Controllers & Routes
app.get('/', (req, res) => {
    res.render('Home')
})

app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true}))

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for
app.listen(process.env.PORT)