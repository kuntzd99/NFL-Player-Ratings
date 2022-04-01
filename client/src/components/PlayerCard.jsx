import { useState, useEffect } from "react"
import axios from "axios"

const PlayerCard = (props) => {
  const [overall, setOverall] = useState(0)
  const [teamColors, setTeamColors] = useState([])

  const getOverall = () => {
    let result = 0
    for (let i = 0; i < Object.values(props.ratings).length; i++) {
      result += parseInt(Object.values(props.ratings)[i])
    }
    setOverall(result / 5)
  }

  const getTeamColors = async () => {
    const response = await axios.get(
      `/api/teams/${props.team}`
    )
    setTeamColors(response.data.team.teamColors)
  }

  useEffect(() => {
    getOverall()
    getTeamColors()
  }, [])

  return(
    <div className="player-card" style={{borderColor: teamColors[0]}} onClick={props.onClick}>
      <h3>{props.name} #{props.number} {props.shortened}</h3>
      <img className="player-image" src={props.image} alt={props.name} />
      <h4>Overall: {overall}</h4>
    </div>
  )
}

export default PlayerCard