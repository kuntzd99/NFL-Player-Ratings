const TeamCard = (props) => {
  return(
    <div className="team-card" onClick={props.onClick}>
      <h3>{props.location} {props.name}</h3>
      <img className="team-image" src={props.image} alt={props.name} />
    </div>
  )
}

export default TeamCard