const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    username: { type: String, required: true },
    comment: { type: String, required: true },
    player: { type: Schema.Types.ObjectId, ref: 'Player' }
  },
  { timestamps: true }
)

module.exports = Comment
