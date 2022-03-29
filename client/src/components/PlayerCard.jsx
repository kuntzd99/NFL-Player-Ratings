const PlayerCard = (props) => {


  return(
    <div className="player-card">
      <h3>{props.name} #{props.number}</h3>
      <img className="player-image" src={props.image} alt={props.name} />
    </div>
  )
}

export default PlayerCard