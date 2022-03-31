import { useState, useEffect } from 'react'
import TeamCard from '../components/TeamCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'

const Players = () => {
  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([useParams()])

  const getPlayers = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/players/${team[0].teamId}`
    )
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
    <div>
      <div className="teams-header">
        <h1>Players</h1>
        <div className="player-card">
          <button onClick={() => navigate(`/players/create/${team[0].teamId}`)}>
            Add Player
          </button>
        </div>
      </div>
      <div className="players-container">
        {players.map((player) => (
          <div key={player._id}>
            <PlayerCard
              name={player.name}
              number={player.number}
              image={player.image}
              shortened={player.shortened}
              ratings={player.ratings}
              onClick={() => showPlayerDetails(player._id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Players
