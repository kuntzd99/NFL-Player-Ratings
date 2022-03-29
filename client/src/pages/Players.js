import { useState, useEffect } from 'react'
import TeamCard from '../components/TeamCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Players = () => {
  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])

  const { teamId } = useParams()
  setTeam(teamId)

  const getPlayers = async () => {
    const response = await axios.get('http://localhost:3001/api/')
    setTeams(response.data.teams)
  }

  useEffect(() => {
    getTeams()
    console.log(teams)
  }, [])

  return (
    <div>
      <div className="teams-header">
        <h1>Teams</h1>
        <div className="team-card">
          <h3>Add team</h3>
          <img
            className="add-team-image"
            src="https://static.vecteezy.com/system/resources/previews/002/935/386/non_2x/rugby-american-football-vector.jpg"
            alt="football"
          />
        </div>
      </div>
      <div className="teams-container">
        {teams.map((team) => (
          <div key={team._id}>
            <TeamCard
              name={team.name}
              location={team.location}
              image={team.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams
