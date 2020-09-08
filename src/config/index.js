const mongoose = require('mongoose')

const host = process.env.MONGO_HOST || 'localhost'
const database = process.env.MONGO_DB || 'card_game'
const port = process.env.MONGO_DB_PORT || 27017

mongoose.connect(`mongodb://${host}:${port}/${database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}, (err) => {
  if (err) {
    console.log('Error in try connection', err)

    process.exit()
  } else {
    console.log('Connected in BD')
  }
})

module.exports = mongoose
