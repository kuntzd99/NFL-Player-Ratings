import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const PlayerDetails = () => {
  const [player, setPlayer] = useState({})
  const [team, setTeam] = useState({})
  const [ratings, setRatings] = useState({})
  const [editing, toggleEditing] = useState(false)
  const [comments, setComments] = useState([])
  const [addingComment, toggleAddingComment] = useState(false)
  const [username, setUsername] = useState('')
  const [comment, setComment] = useState('')
  const [overall, setOverall] = useState(0)
  const [teamColors, setTeamColors] = useState([])

  const { playerId } = useParams()

  const getPlayerAndTeam = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/details/${playerId}`
    )
    setPlayer(response.data.player)
    setRatings(response.data.player.ratings)
    let total = 0
    for (
      let i = 0;
      i < Object.values(response.data.player.ratings).length;
      i++
    ) {
      total += parseInt(Object.values(response.data.player.ratings)[i])
    }
    setOverall(total / 5)
    const team = await axios.get(
      `http://localhost:3001/api/teams/${response.data.player.team[0]}`
    )
    setTeam(team.data.team)
    setTeamColors(team.data.team.teamColors)
  }

  const getComments = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/comments/${playerId}`
    )
    setComments(response.data.comments)
  }

  useEffect(() => {
    getPlayerAndTeam()
    getComments()
  }, [])

  let navigate = useNavigate()

  const handleChange = (e) => {
    let newRatings = ratings
    newRatings[e.target.name.toString()] = parseInt(e.target.value)
    setRatings(newRatings)
  }

  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  const handleCommentChange = (e) => {
    e.preventDefault()
    setComment(e.target.value)
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

  const myStyle = {
    borderColor: teamColors[0],
    background: teamColors[1]
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
    window.location.reload()
  }

  const handleCommentSubmit = async (e) => {
    const packagedPayLoad = {
      username: username,
      comment: comment,
      player: playerId
    }
    e.preventDefault()
    await axios
      .post(`http://localhost:3001/api/comments`, packagedPayLoad)
      .catch((err) => console.log(err))
    toggleAddingComment(false)
    window.location.reload()
  }

  const deletePlayer = async () => {
    navigate(`/players/${team._id}`)
    await axios.delete(`http://localhost:3001/api/players/${playerId}`)
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
        style={myStyle}
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
            <button
              style={{ borderColor: teamColors[0] }}
              onClick={() => toggleEditing(false)}
            >
              Cancel
            </button>
            <button style={{ borderColor: teamColors[0] }} type="submit">
              Update
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="form-element">
            <label>{toNormalCasing(Object.keys(ratings)[0])}:</label>
            <input
              style={myStyle}
              type="range"
              value={Object.values(ratings)[0]}
            />{' '}
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
          <h3>Overall: {overall}</h3>
          <div className="button-container">
            <button
              style={{ borderColor: teamColors[0] }}
              onClick={() => toggleEditing(true)}
            >
              Edit
            </button>
            <button
              style={{ borderColor: teamColors[0] }}
              onClick={deletePlayer}
            >
              Delete
            </button>
          </div>
        </div>
      )}
      <h3>
        Comments
        <button
          style={{ borderColor: teamColors[0] }}
          onClick={() => toggleAddingComment(true)}
        >
          Add Comment
        </button>
      </h3>
      <div className="comment-container">
        {comments.map((comment) => (
          <div
            style={{ borderColor: teamColors[0] }}
            className="comment"
            key={comment._id}
          >
            <p>
              {comment.username}: {comment.comment}
            </p>
          </div>
        ))}
      </div>
      {addingComment ? (
        <div>
          <form onSubmit={handleCommentSubmit}>
            <input onChange={handleUsernameChange} placeholder="username" />
            <input
              onChange={handleCommentChange}
              placeholder="Leave a comment"
            />
            <div className="button-container">
              <button
                style={{ borderColor: teamColors[0] }}
                onClick={() => toggleAddingComment(false)}
              >
                Cancel
              </button>
              <button style={{ borderColor: teamColors[0] }} type="submit">
                Post Comment
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default PlayerDetails
