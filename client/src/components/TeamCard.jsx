import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const TeamCard = (props) => {
  const [editing, toggleEditing] = useState(false)
  const [location, setLocation] = useState(props.location)
  const [teamName, setTeamName] = useState(props.name)

  const editTeam = () => {
    toggleEditing(!editing)
  }

  const handleLocationChange = (e) => {
    e.preventDefault()
    setLocation(e.target.value)
  }

  const handleNameChange = (e) => {
    e.preventDefault()
    setTeamName(e.target.value)
  }

  const handleOnSubmit = async (e) => {
    const packagedPayLoad = {
      name: teamName,
      location: location,
      image: props.image,
      teamColors: props.teamColors
    }
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/teams/${props.id}`, packagedPayLoad).catch((err) => console.log(err))
    toggleEditing(!editing)
  }

  let navigate = useNavigate()

  const deleteTeam = async () => {
    await axios.delete(`http://localhost:3001/api/teams/${props.id}`)
    navigate('/teams')
  }

  return(
    <div>
      {editing ? 
      <div className="team-card">
        <form onSubmit={handleOnSubmit}>
          <input onChange={handleLocationChange} type="text" placeholder="Location" />
          <input onChange={handleNameChange} type="text" placeholder="Team Name" />
          <img className="team-image" src={props.image} alt={props.name} />
          <button type="submit">Submit</button>
        </form>
      </div> 
      :
      <div>
        <div className="team-card">
          <div onClick={props.onClick}>
            <h3>{location} {teamName}</h3>
            <img className="team-image" src={props.image} alt={teamName} />
          </div>
          <div className="button-container">
            <button onClick={() => toggleEditing(!editing)}>Edit</button>
            <button onClick={deleteTeam}>Delete</button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default TeamCard