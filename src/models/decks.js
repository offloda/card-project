const mongoose = require('mongoose')

const deckSchema = new mongoose.Schema({
  deck_name: { type: String, require: true },
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  cards: [{
    quantity: { type: Number, default: 0 },
    id_card: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
  }],
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
})

module.exports = mongoose.model('Deck', deckSchema)
