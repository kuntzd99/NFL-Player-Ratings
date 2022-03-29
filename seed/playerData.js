const db = require('../db')
const { Player, Team } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  // const newTeam = await new Team({
  //   name: 'new team',
  //   location: 'chicago',
  //   image: 'http://www.kjfdlk.com',
  //   teamColors: ['red', 'blue']
  // })
  // newTeam.save()

  const jJefferson = await new Player({
    name: 'Justin Jefferson',
    number: '18',
    image:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4262921.png&w=350&h=254',
    team: '624201bcb38070b5476e192d',
    height: "6'1",
    weight: '203 lbs',
    position: 'Wide Receiver',
    shortened: 'WR',
    ratings: {
      speed: 90,
      routeRunning: 95,
      hands: 95,
      jumping: 90,
      release: 93
    }
  })
  await jJefferson.save()
  console.log('success')
}

const run = async () => {
  await main()
  db.close()
}

run()
