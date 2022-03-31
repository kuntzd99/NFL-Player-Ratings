const { Router } = require('express')
const teamControllers = require('../controllers/TeamController')
const playerControllers = require('../controllers/PlayerController')
const commentControllers = require('../controllers/CommentContoller')
const router = Router()

router.get('/teams', teamControllers.getAllTeams)

router.get('/players/:teamId', playerControllers.getPlayersByTeam)

router.get('/details/:playerId', playerControllers.getPlayerById)

router.get('/teams/:teamId', teamControllers.getTeamById)

router.get('/comments/:playerId', commentControllers.getCommentsByPlayer)

router.put('/teams/:teamId', teamControllers.editTeam)

router.post('/teams', teamControllers.createTeam)

router.delete('/teams/:teamId', teamControllers.deleteTeam)

router.post('/players', playerControllers.createPlayer)

router.post('/comments', commentControllers.createComment)

router.delete('/players/:playerId', playerControllers.deletePlayer)

router.put('/players/:playerId', playerControllers.editPlayer)

module.exports = router
