const mongoose = require('mongoose').Schema()

const cardSchema = new mongoose({
  card_name: { type: String, require: true },
  card_lore: { type: String, require: true },
  card_class: { type: String, require: true },
  card_category: { type: String, require: true },
  card_region: { type: String, require: true },
  card_attack: { type: Number, require: true },
  card_life: { type: Date, require: true },
  card_cost: { type: Date, require: true },
})

module.exports = mongoose.model('Card', cardSchema)
