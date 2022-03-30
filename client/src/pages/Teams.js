import { useState, useEffect } from 'react'
import TeamCard from '../components/TeamCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Teams = () => {
  const [teams, setTeams] = useState([])

  const getTeams = async () => {
    const response = await axios.get('http://localhost:3001/api/teams')
    setTeams(response.data.teams)
  }

  useEffect(() => {
    getTeams()
  }, [])

  let navigate = useNavigate()

  const showPlayers = (teamId) => {
    navigate(`/players/${teamId}`)
  }

  return (
    <div>
      <div className="teams-header">
        <h1>Teams</h1>
      </div>
      <div className="teams-container">
        <div className="team-card add-team">
          <h3>Add team</h3>
          <h1>+</h1>
        </div>
        {teams.map((team) => (
          <div key={team._id}>
            <TeamCard
              name={team.name}
              location={team.location}
              image={team.image}
              teamColors={team.teamColors}
              id={team._id}
              onClick={() => showPlayers(team._id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams
