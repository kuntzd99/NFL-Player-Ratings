const express = require('express')
const routes = require('./routes')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
