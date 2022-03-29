const PlayerCard = (props) => {

  return(
    <div className="player-card" onClick={props.onClick}>
      <h3>{props.name} #{props.number} {props.shortened}</h3>
      <img className="player-image" src={props.image} alt={props.name} />
    </div>
  )
}

export default PlayerCard