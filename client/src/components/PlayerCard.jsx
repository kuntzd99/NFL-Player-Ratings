import { useState, useEffect } from "react"

const PlayerCard = (props) => {
  const [overall, setOverall] = useState(0)

  const getOverall = () => {
    let result = 0
    for (let i = 0; i < Object.values(props.ratings).length; i++) {
      result += parseInt(Object.values(props.ratings)[i])
    }
    setOverall(result / 5)
  }

  useEffect(() => {
    console.log(props.ratings)
    getOverall()
  }, [])

  return(
    <div className="player-card" onClick={props.onClick}>
      <h3>{props.name} #{props.number} {props.shortened}</h3>
      <img className="player-image" src={props.image} alt={props.name} />
      <h4>Overall: {overall}</h4>
    </div>
  )
}

export default PlayerCard