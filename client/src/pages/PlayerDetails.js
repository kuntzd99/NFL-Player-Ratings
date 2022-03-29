import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const PlayerDetails = () => {
  const [player, setPlayer] = useState({})
  const [team, setTeam] = useState({})
  const [ratings, setRatings] = useState({})

  const { playerId } = useParams()

  const getPlayerAndTeam = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/details/${playerId}`
    )
    setPlayer(response.data.player)
    setRatings(response.data.player.ratings)
    const team = await axios.get(
      `http://localhost:3001/api/teams/${response.data.player.team[0]}`
    )
    setTeam(team.data.team)
  }

  useEffect(() => {
    getPlayerAndTeam()
  }, [])

  let navigate = useNavigate()

  const showTeamPage = (teamId) => {
    navigate(`/players/${teamId}`)
  }

  return (
    <div className="player-details">
      <h1>
        {player.name} #{player.number} {player.shortened}
      </h1>
      <h3>
        {team.location} {team.name}
      </h3>
      <p>
        {player.height}, {player.weight}
      </p>
      <img
        className="player-details-image"
        src={player.image}
        alt={player.name}
      />
      {Object.keys(ratings).map((rating) => (
        <div key={rating}>
          {rating}: {player.ratings[rating.toString()]}
        </div>
      ))}
      <input type="range" min="1" max="100" />
    </div>
  )
}

export default PlayerDetails
