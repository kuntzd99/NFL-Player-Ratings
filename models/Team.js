const { Schema } = require('mongoose')

const Team = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    teamColors: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = Team
