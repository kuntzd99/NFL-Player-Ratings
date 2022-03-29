const db = require('../db')
const { Position } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const wideReceiver = await new Position({
    name: 'Wide Receiver',
    shortened: 'WR',
    ratings: {
      speed: 0,
      routeRunning: 0,
      hands: 0,
      jumping: 0,
      release: 0
    }
  })
  wideReceiver.save()

  const quarterback = await new Position({
    name: 'Quarterback',
    shortened: 'QB',
    ratings: {
      throwPower: 0,
      accuracy: 0,
      speed: 0,
      awareness: 0
    }
  })
}

const run = async () => {
  await main()
  db.close()
}

run()
