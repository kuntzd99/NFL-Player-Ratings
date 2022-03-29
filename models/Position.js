const { Schema } = require('mongoose')

const Position = new Schema(
  {
    name: { type: String, required: true },
    shortened: { type: String, required: true },
    ratings: { type: Object, required: true }
  },
  { timestamps: true }
)

module.exports = Position
