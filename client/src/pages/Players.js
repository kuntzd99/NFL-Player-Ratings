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
    console.log(response)
    setPlayers(response.data.players)
  }

  useEffect(() => {
    getPlayers()
  }, [])

  return (
    <div>
      <div className="teams-header">
        <h1>Players</h1>
        <div className="player-card">
          <h3>Add player</h3>
        </div>
      </div>
      <div className="players-container">
        {players.map((player) => (
          <div key={player._id}>
            <PlayerCard
              name={player.name}
              number={player.number}
              image={player.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Players
