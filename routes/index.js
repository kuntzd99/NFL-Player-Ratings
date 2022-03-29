const { Router } = require('express')
const teamControllers = require('../controllers/TeamController')
const playerControllers = require('../controllers/PlayerController')
const router = Router()

router.get('/teams', teamControllers.getAllTeams)

router.get('/players/:teamId', playerControllers.getPlayersByTeam)

module.exports = router
