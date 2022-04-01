import { useState, useEffect } from "react"
import axios from "axios"

const TeamCard = (props) => {
  const [editing, toggleEditing] = useState(false)
  const [location, setLocation] = useState(props.location)
  const [teamName, setTeamName] = useState(props.name)
  const [deleted, toggleDeleted] = useState(false)
  const [overall, setOverall] = useState(0)

  const getOverall = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/players/${props.id}`
    )
    if (response.data.players.length === 0) {
      return 0  
    }
    let total = 0
    for (let i = 0; i < response.data.players.length; i ++) {
      let average = 0
      for (let j = 0; j < Object.values(response.data.players[i].ratings).length; j++) {
        average += parseInt(Object.values(response.data.players[i].ratings)[j])
      }
      total += average / 5
    }
    setOverall(total / response.data.players.length)
  }

  useEffect(() => {
    getOverall()
  }, [])

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

  const deleteTeam = async () => {
    await axios.delete(`http://localhost:3001/api/teams/${props.id}`)
    toggleDeleted(true)
  }

  const myStyle = {
    borderColor: props.teamColors[0],
  }

  return(
    <div>
      {deleted ? <div></div> :
      editing ? 
      <div className="team-card" style={{borderColor: props.teamColors[0]}}>
        <form onSubmit={handleOnSubmit}>
          <input onChange={handleLocationChange} type="text" placeholder="Location" />
          <input onChange={handleNameChange} type="text" placeholder="Team Name" />
          <img className="team-image" src={props.image} alt={props.name} />
          <div className="button-container">
            <button style={{borderColor: props.teamColors[0]}} onClick={() => toggleEditing(false)}>Cancel</button>
            <button type="submit" style={{borderColor: props.teamColors[0]}}>Submit</button>
          </div>
        </form>
      </div> 
      :
      <div>
        <div className="team-card" style={{borderColor: props.teamColors[0]}}>
          <div onClick={props.onClick}>
            <h3>{location}</h3>
            <h3>{teamName}</h3>
            <img className="team-image" src={props.image} alt={teamName} />
          </div>
          <h3>Overall: {overall}</h3>
          <div className="button-container">
            <button style={{borderColor: props.teamColors[0]}} onClick={() => toggleEditing(!editing)}>Edit</button>
            <button style={{borderColor: props.teamColors[0]}} onClick={deleteTeam}>Delete</button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default TeamCard