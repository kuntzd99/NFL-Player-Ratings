const { Player } = require('../models/index')

const getPlayersByTeam = async (req, res) => {
  try {
    const allPlayers = await Player.find()
    let players = []
    allPlayers.forEach((player) => {
      if (player.team._id == req.params.id) {
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

module.exports = {
  getPlayersByTeam
}
