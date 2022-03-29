import { useState } from "react"
import axios from "axios"

const TeamCard = (props) => {
  const [editing, toggleEditing] = useState(false)
  const [teamName, setTeamName] = useState('')

  const editTeam = () => {
    toggleEditing(!editing)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setTeamName(e.target.value)
  }

  const handleOnSubmit = async () => {
    e.preventDefault()
    toggleEditing(!editing)
  }

  <form onSubmit={handleOnSubmit}>
    <input onChange={handleChange} type="text" />
    <img className="team-image" src={props.image} alt={props.name} />
    <button type="submit">Submit</button>
  </form>

  let display

  return(
    <div>
      {editing ? <div className="team-card"></div> :
      <div className="team-card" onClick={props.onClick}>
        <h3>{props.location} {props.name}</h3>
        <img className="team-image" src={props.image} alt={props.name} />
        <button>Edit</button>
      </div>
      }
    </div>
  )
}

export default TeamCard