require('./config/index')

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')

const cors = require('cors')
const errorHandler = require('./helpers/errorHandler')

const {
  usersRouter,
  router: indexRouter,
} = require('./router')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use((req, res, next) => {
  next(createError(404))
}) 
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Connected on PORT:${port}`)
})
