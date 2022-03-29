const { Team } = require('../models/index')

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find()
    return res.status(200).json({ teams })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId)
    if (team) {
      return res.status(200).json({ team })
    }
    return res.status(404).send('Team with specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId)
    team.name = req.body.name
    team.location = req.body.location
    team.image = req.body.image
    team.teamColors = req.body.teamColors
    team.save()
    res.status(200).json({ team })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTeams,
  getTeamById,
  editTeam
}
