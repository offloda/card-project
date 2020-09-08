const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
  user_email: { type: String, require: true },
  user_password: { type: String, require: true },
  active: { type: Boolean, default: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
})

module.exports = mongoose.model('Account', accountSchema)
