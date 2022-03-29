const { Router } = require('express')
const teamControllers = require('../controllers/TeamController')
const playerControllers = require('../controllers/PlayerController')
const router = Router()

router.get('/teams', teamControllers.getAllTeams)

router.get('/players/:teamId', playerControllers.getPlayersByTeam)

router.get('/details/:playerId', playerControllers.getPlayerById)

router.get('/teams/:teamId', teamControllers.getTeamById)

router.put('/teams/:teamId', teamControllers.editTeam)

module.exports = router
