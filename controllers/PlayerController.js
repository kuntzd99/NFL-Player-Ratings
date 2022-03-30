const { Player } = require('../models/index')

const getPlayersByTeam = async (req, res) => {
  try {
    const allPlayers = await Player.find()
    let players = []
    allPlayers.forEach((player) => {
      if (player.team[0] == req.params.teamId) {
        players.push(player)
      }
    })
    if (players) {
      return res.status(200).json({ players })
    }
    return res.status(404).send('Reviews for this ride do not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId)
    if (player) {
      return res.status(200).json({ player })
    }
    return res.status(404).send('Player with specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPlayer = async (req, res) => {
  try {
    const player = await new Player(req.body)
    await player.save()
    return res.status(201).json({ player })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePlayer = async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.playerId)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editPlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId)
    player.name = req.body.name
    player.number = req.body.number
    player.image = req.body.image
    player.team = req.body.team
    player.height = req.body.height
    player.weight = req.body.weight
    player.position = req.body.position
    player.shortened = req.body.shortened
    player.ratings = req.body.ratings
    player.save()
    res.status(200).json({ player })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getPlayersByTeam,
  getPlayerById,
  createPlayer,
  deletePlayer,
  editPlayer
}
