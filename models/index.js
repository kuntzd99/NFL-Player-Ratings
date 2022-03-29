const mongoose = require('mongoose')
const PlayerSchema = require('./Player')
const PositionSchema = require('./Position')
const TeamSchema = require('./Team')
const CommentSchema = require('./Comment')

const Player = mongoose.model('Player', PlayerSchema)
const Position = mongoose.model('Position', PositionSchema)
const Team = mongoose.model('Team', TeamSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {
  Player,
  Position,
  Team,
  Comment
}
