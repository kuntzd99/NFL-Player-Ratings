import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const PlayerDetails = () => {
  const [player, setPlayer] = useState({})
  const [team, setTeam] = useState({})
  const [ratings, setRatings] = useState({})
  const [editing, toggleEditing] = useState(false)

  const { playerId } = useParams()

  const getPlayerAndTeam = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/details/${playerId}`
    )
    setPlayer(response.data.player)
    setRatings(response.data.player.ratings)
    const team = await axios.get(
      `http://localhost:3001/api/teams/${response.data.player.team[0]}`
    )
    setTeam(team.data.team)
  }

  useEffect(() => {
    getPlayerAndTeam()
  }, [])

  let navigate = useNavigate()

  const showTeamPage = (teamId) => {
    navigate(`/players/${teamId}`)
  }

  const handleChange = (e) => {
    let newRatings = ratings
    newRatings[e.target.name.toString()] = parseInt(e.target.value)
    setRatings(newRatings)
  }

  const toNormalCasing = (string) => {
    // Takes camel case string and makes it normal for displaying
    if (Object.keys(ratings).length !== 0) {
      let result = ''
      result += string[0].toUpperCase()
      for (let i = 1; i < string.length; i++) {
        if (string[i].toUpperCase() === string[i]) {
          result += ' '
        }
        result += string[i]
      }
      return result
    } else {
      return string
    }
  }

  const handleSubmit = async (e) => {
    const packagedPayLoad = {
      name: player.name,
      number: player.number,
      image: player.image,
      team: team,
      height: player.height,
      weight: player.weight,
      position: player.position,
      shortened: player.shortened,
      ratings: ratings
    }
    e.preventDefault()
    await axios
      .put(`http://localhost:3001/api/players/${playerId}`, packagedPayLoad)
      .catch((err) => console.log(err))
    toggleEditing(!editing)
  }

  return (
    <div className="player-details">
      <h1>
        {player.name} #{player.number} {player.shortened}
      </h1>
      <h3>
        {team.location} {team.name}
      </h3>
      <p>
        {player.height}, {player.weight}
      </p>
      <img
        className="player-details-image"
        src={player.image}
        alt={player.name}
      />
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[0])}: </label>
            <input
              name={Object.keys(ratings)[0]}
              onChange={handleChange}
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[1])}: </label>
            <input
              name={Object.keys(ratings)[1]}
              onChange={handleChange}
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[2])}: </label>
            <input
              name={Object.keys(ratings)[2]}
              onChange={handleChange}
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[3])}: </label>
            <input
              name={Object.keys(ratings)[3]}
              onChange={handleChange}
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[4])}: </label>
            <input
              name={Object.keys(ratings)[4]}
              onChange={handleChange}
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div>
            <button onClick={() => toggleEditing(false)}>Cancel</button>
            <button type="submit">Update</button>
          </div>
        </form>
      ) : (
        <div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[0])}:</label>
            <input type="range" value={Object.values(ratings)[0]} />{' '}
            {Object.values(ratings)[0]}
          </div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[1])}:</label>
            <input type="range" value={Object.values(ratings)[1]} />{' '}
            {Object.values(ratings)[1]}
          </div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[2])}:</label>
            <input type="range" value={Object.values(ratings)[2]} />{' '}
            {Object.values(ratings)[2]}
          </div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[3])}:</label>
            <input type="range" value={Object.values(ratings)[3]} />{' '}
            {Object.values(ratings)[3]}
          </div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[4])}:</label>
            <input type="range" value={Object.values(ratings)[4]} />{' '}
            {Object.values(ratings)[4]}
          </div>
          <button onClick={() => toggleEditing(true)}>Edit</button>
        </div>
      )}
      <button className="back" onClick={() => showTeamPage(team._id)}>
        Back
      </button>
    </div>
  )
}

export default PlayerDetails
