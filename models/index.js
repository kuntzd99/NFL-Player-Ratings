const mongoose = require('mongoose')
const PlayerSchema = require('./Player')
const TeamSchema = require('./Team')
const CommentSchema = require('./Comment')

const Player = mongoose.model('Player', PlayerSchema)
const Team = mongoose.model('Team', TeamSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {
  Player,
  Team,
  Comment
}
