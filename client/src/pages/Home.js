import { useState, useEffect } from 'react'
import axios from 'axios'
import PlayerCard from '../components/PlayerCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [players, setPlayers] = useState([])

  const getPlayers = async () => {
    const response = await axios.get(`http://localhost:3001/api/players`)
    let overalls = {}
    for (let i = 0; i < response.data.players.length; i++) {
      overalls[response.data.players[i]._id] = getOverall(
        response.data.players[i].ratings
      )
    }
    const sortable = []
    for (let overall in overalls) {
      sortable.push([overall, overalls[overall]])
    }
    sortable.sort((a, b) => {
      return a[1] - b[1]
    })
    sortable.reverse()
    const sortedPlayers = []
    for (let i = 0; i < sortable.length; i++) {
      const sortedPlayer = await axios.get(
        `http://localhost:3001/api/details/${sortable[i][0]}`
      )
      sortedPlayers.push(sortedPlayer.data.player)
    }
    console.log(sortedPlayers)
    setPlayers(sortedPlayers)
  }

  const getOverall = (ratings) => {
    if (Object.values(ratings).length === 0) {
      return 0
    }
    let total = 0
    for (let i = 0; i < Object.values(ratings).length; i++) {
      total += parseInt(Object.values(ratings)[i])
    }
    return total / 5
  }

  useEffect(() => {
    getPlayers()
  }, [])

  let navigate = useNavigate()

  const showPlayerDetails = (playerId) => {
    navigate(`/details/${playerId}`)
  }

  return (
    <div className="home">
      <h1>Rate and Comment on NFL players</h1>
      <p>
        Click on teams to view/create NFL teams. Click on a team to view its
        players, and click on a player to view ratings and comments.
      </p>
      <h3>Highest-Rated Players:</h3>
      <div className="players-container">
        {players.map((player) => (
          <div key={player._id}>
            <PlayerCard
              name={player.name}
              number={player.number}
              image={player.image}
              shortened={player.shortened}
              ratings={player.ratings}
              team={player.team}
              onClick={() => showPlayerDetails(player._id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
