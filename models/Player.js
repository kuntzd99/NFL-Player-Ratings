const { Schema } = require('mongoose')

const Player = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    image: { type: String, required: true },
    team: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
    height: { type: String, required: true },
    weight: { type: String, required: true },
    position: { type: String, required: true },
    shortened: { type: String, required: true },
    ratings: { type: Object, required: true }
  },
  { timestamps: true }
)

module.exports = Player
