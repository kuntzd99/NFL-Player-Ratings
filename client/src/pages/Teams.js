import { useState, useEffect } from 'react'
import TeamCard from '../components/TeamCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Teams = () => {
  const [teams, setTeams] = useState([])
  const [deleted, toggleDeleted] = useState(false)

  const getTeams = async () => {
    const response = await axios.get('/api/teams')
    let overalls = {}
    for (let i = 0; i < response.data.teams.length; i++) {
      const player = await axios.get(
        `/api/players/${response.data.teams[i]._id}`
      )
      overalls[response.data.teams[i]._id] = getOverall(player.data.players)
    }
    // StackOverflow code to sort the overalls object by its values
    const sortable = []
    for (let overall in overalls) {
      sortable.push([overall, overalls[overall]])
    }
    sortable.sort((a, b) => {
      return a[1] - b[1]
    })
    sortable.reverse()
    const sortedTeams = []
    for (let i = 0; i < sortable.length; i++) {
      const sortedTeam = await axios.get(`/api/teams/${sortable[i][0]}`)
      sortedTeams.push(sortedTeam.data.team)
    }
    setTeams(sortedTeams)
  }

  const getOverall = (players) => {
    if (players.length === 0) {
      return 0
    }
    let total = 0
    for (let i = 0; i < players.length; i++) {
      let average = 0
      for (let j = 0; j < Object.values(players[i].ratings).length; j++) {
        average += parseInt(Object.values(players[i].ratings)[j])
      }
      total += average / 5
    }
    return total / players.length
  }

  useEffect(async () => {
    await getTeams()
  }, [deleted])

  let navigate = useNavigate()

  const showPlayers = (teamId) => {
    navigate(`/players/${teamId}`)
  }

  const deleteTeam = async (teamId) => {
    await axios.delete(`/api/teams/${teamId}`)
    await getTeams()
    toggleDeleted(!deleted)
  }

  return (
    <div>
      <p>When deleting a team, you must refresh the page to see it gone</p>
      <div className="teams-header">
        <h1>Teams</h1>
      </div>
      {teams.length > 0 ? (
        <div className="teams-container">
          {teams.map((team) => (
            <div key={team._id}>
              <TeamCard
                name={team.name}
                location={team.location}
                image={team.image}
                teamColors={team.teamColors}
                id={team._id}
                deleted={deleted}
                deleteTeam={() => deleteTeam(team._id)}
                onClick={() => showPlayers(team._id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  )
}

export default Teams
