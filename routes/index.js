const { Router } = require('express')
const controllers = require('../controllers/TeamController')
const router = Router()

router.get('/teams', controllers.getAllTeams)

module.exports = router
