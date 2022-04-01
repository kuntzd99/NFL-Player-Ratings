const db = require('../db')
const { Team } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const teams = [
    {
      name: 'Vikings',
      location: 'Minnesota',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png',
      teamColors: ['purple', 'gold']
    },

    {
      name: 'Patriots',
      location: 'New England',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png',
      teamColors: ['blue', 'red']
    },

    {
      name: 'Buccaneers',
      location: 'Tampa Bay',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png',
      teamColors: ['red', 'white']
    },

    {
      name: 'Packers',
      location: 'Green Bay',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png',
      teamColors: ['green', 'yellow']
    },

    {
      name: 'Lions',
      location: 'Detroit',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/det.png',
      teamColors: ['dodgerblue', 'white']
    },

    {
      name: 'Bears',
      location: 'Chicago',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png',
      teamColors: ['orangered', 'navy']
    },

    {
      name: 'Panthers',
      location: 'Carolina',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png',
      teamColors: ['deepskyblue', 'black']
    },

    {
      name: 'Seahawks',
      location: 'Seattle',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png',
      teamColors: ['lime', 'navy']
    },

    {
      name: 'Broncos',
      location: 'Denver',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png',
      teamColors: ['darkorange', 'navy']
    },

    {
      name: 'Jets',
      location: 'New York',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png',
      teamColors: ['green', 'white']
    },

    {
      name: 'Giants',
      location: 'New York',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png',
      teamColors: ['blue', 'red']
    },

    {
      name: 'Rams',
      location: 'Los Angeles',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png',
      teamColors: ['yellow', 'blue']
    },

    {
      name: 'Chargers',
      location: 'Los Angeles',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png',
      teamColors: ['yellow', 'deepskyblue']
    },

    {
      name: 'Raiders',
      location: 'Las Vegas',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png',
      teamColors: ['black', 'white']
    },

    {
      name: 'Chiefs',
      location: 'Kansas City',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png',
      teamColors: ['red', 'white']
    },

    {
      name: 'Cardinals',
      location: 'Arizona',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/ari.png',
      teamColors: ['red', 'black']
    },

    {
      name: 'Saints',
      location: 'New Orleans',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png',
      teamColors: ['tan', 'black']
    },

    {
      name: '49ers',
      location: 'San Francisco',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png',
      teamColors: ['red', 'tan']
    },

    {
      name: 'Dolphins',
      location: 'Miami',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/mia.png',
      teamColors: ['lightseagreen', 'orange']
    },

    {
      name: 'Bills',
      location: 'Buffalo',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png',
      teamColors: ['blue', 'red']
    },

    {
      name: 'Texans',
      location: 'Houston',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png',
      teamColors: ['red', 'navy']
    },

    {
      name: 'Cowboys',
      location: 'Dallas',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/dal.png',
      teamColors: ['navy', 'white']
    },

    {
      name: 'Jaguars',
      location: 'Jacksonville',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/jac.png',
      teamColors: ['darkgoldenrod', 'teal']
    },

    {
      name: 'Titans',
      location: 'Tennessee',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png',
      teamColors: ['darkturquoise', 'red']
    },

    {
      name: 'Browns',
      location: 'Cleveland',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png',
      teamColors: ['orangered', 'brown']
    },

    {
      name: 'Steelers',
      location: 'Pittsburg',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/pit.png',
      teamColors: ['yellow', 'black']
    },

    {
      name: 'Bengals',
      location: 'Cincinnati',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png',
      teamColors: ['orange', 'black']
    },

    {
      name: 'Ravens',
      location: 'Baltimore',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png',
      teamColors: ['rebeccapurple', 'darkkhaki']
    },

    {
      name: 'Generals',
      location: 'Washington',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/was.png',
      teamColors: ['gold', 'maroon']
    },

    {
      name: 'Eagles',
      location: 'Philadelphia',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png',
      teamColors: ['darkgreen', 'white']
    },

    {
      name: 'Colts',
      location: 'Indianapolis',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png',
      teamColors: ['navy', 'white']
    },

    {
      name: 'Falcons',
      location: 'Atlanta',
      image: 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png',
      teamColors: ['red', 'black']
    }
  ]

  await Team.insertMany(teams)
  console.log('Created teams!')
}

const run = async () => {
  await main()
  db.close()
}

run()
