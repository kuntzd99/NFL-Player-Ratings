import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const PlayerForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')
  const [weight, setWeight] = useState('')
  const [position, setPosition] = useState('')
  const [shortened, setShortened] = useState('')
  const [ratingsModel, setRatingsModel] = useState('')
  const [ratings, setRatings] = useState ({})
  const [teamName, setTeamName] = useState('')

  const { teamId } = useParams()

  const getTeamName = async () => {
    console.log(teamId)
    const response = await axios.get(
      `http://localhost:3001/api/teams/${teamId}`
    )
    setTeamName(response.data.team.name)
  }

  useEffect(() => {
    setTeam(teamId)
    getRatingsModel()
  }, [shortened])

  useEffect(() => {
    getTeamName()
  })

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleNumberChange = (e) => {
    e.preventDefault()
    setNumber(e.target.value)
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    setImage(e.target.value)
  }

  const handleHeightFeetChange = (e) => {
    e.preventDefault()
    setHeightFeet(e.target.value)
  }

  const handleHeightInchesChange = (e) => {
    e.preventDefault()
    setHeightInches(e.target.value)
  }

  const handleWeightChange = (e) => {
    e.preventDefault()
    setWeight(e.target.value)
  }

  const handleRatingChange = (e) => {
    e.preventDefault()
    let newRatings = ratings
    newRatings[e.target.name.toString()] = e.target.value
    setRatings(newRatings)
  }

  const getRatingsModel = () => {
    switch (shortened) {
      case "WR":
        setPosition('Wide Receiver')
        setRatingsModel(
        <div>
          <div className="form-element">
            <label>Speed: </label>
            <input
              onChange={handleRatingChange}
              name="speed"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form=element">
            <label>Route Running: </label>
            <input
              onChange={handleRatingChange}
              name="routeRunning"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form-element">
            <label>Hands: </label>
            <input
              onChange={handleRatingChange}
              name="hands"
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>Jumping: </label>
            <input
              onChange={handleRatingChange}
              name="jumping"
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>Release: </label>
            <input
              onChange={handleRatingChange}
              name="release"
              type="number"
              min="1"
              max="100"
            />
          </div>
        </div>)
        break
      case "QB":
        setPosition("Quarterback")
        setRatingsModel(
          <div>
          <div className="form-element">
            <label>Speed: </label>
            <input
              onChange={handleRatingChange}
              name="speed"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form-element">
            <label>Throw Power: </label>
            <input
              onChange={handleRatingChange}
              name="throwPower"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form-element">
            <label>Throw Accuracy: </label>
            <input
              onChange={handleRatingChange}
              name="throwAccuracy"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form-element">
            <label>Awareness: </label>
            <input
              onChange={handleRatingChange}
              name="awareness"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form-element">
            <label>Vision: </label>
            <input
              onChange={handleRatingChange}
              name="vision"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
        </div>)
        break 
      case "RB":
        setPosition('Runningback')
        setRatingsModel(
        <div>
          <div className="form-element">
            <label>Speed: </label>
            <input
              onChange={handleRatingChange}
              name="speed"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form=element">
            <label>Juke Move: </label>
            <input
              onChange={handleRatingChange}
              name="jukeMove"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form-element">
            <label>Vision: </label>
            <input
              onChange={handleRatingChange}
              name="vision"
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>Truck: </label>
            <input
              onChange={handleRatingChange}
              name="truck"
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>Carry: </label>
            <input
              onChange={handleRatingChange}
              name="carry"
              type="number"
              min="1"
              max="100"
            />
          </div>
        </div>)
        break
      case "LB":
        setPosition('Linebacker')
        setRatingsModel(
        <div>
          <div className="form-element">
            <label>Speed: </label>
            <input
              onChange={handleRatingChange}
              name="speed"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form=element">
            <label>Hit Power: </label>
            <input
              onChange={handleRatingChange}
              name="hitPower"
              type="number"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form-element">
            <label>Play Recognition: </label>
            <input
              onChange={handleRatingChange}
              name="playRecognition"
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>Tackling: </label>
            <input
              onChange={handleRatingChange}
              name="tackling"
              type="number"
              min="1"
              max="100"
            />
          </div>
          <div className="form-element">
            <label>Pass Rush: </label>
            <input
              onChange={handleRatingChange}
              name="passRush"
              type="number"
              min="1"
              max="100"
            />
          </div>
        </div>)
        break
    }
  }

  const handlePositionChange = (e) => {
    e.preventDefault()
    setShortened(e.target.value)
  }

  let navigate = useNavigate()

  const handleOnSubmit = async (e) => {
    const packagedPayLoad = {
      name: name,
      number: number,
      image: image,
      team: team,
      height: `${heightFeet}' ${heightInches}`,
      weight: `${weight} lbs`,
      position: position,
      shortened: shortened,
      ratings: ratings
    }
    if (image === '') {
      packagedPayLoad.image = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png'
    }
    e.preventDefault()
    axios.post(`http://localhost:3001/api/players/`, packagedPayLoad).catch((err) => console.log(err))
    navigate(`/players/${team}`)
  }

  return(
    <div>
      <h2>Create Player for {teamName}</h2>
    <form className="player-form" onSubmit={handleOnSubmit}>
      <div className="form-element">
        <label>Name: </label>
        <input onChange={handleNameChange} type="text" name="name" required />
      </div>
      <div className="form-element">
        <label>Number: </label>
        <input onChange={handleNumberChange} type="number" name="number" required />
      </div>
      <div className="form-element">
        <label>Image: </label>
        <input onChange={handleImageChange} type="text" name="image" />
      </div>
      <div className="form-element">
        <label>Height: </label>
        <input onChange={handleHeightFeetChange} type="number" min="0" name="heightFeet" required />'
        <input onChange={handleHeightInchesChange} type="number" min="0" max="11" name="heightIches" required /> "
      </div>
      <div className="form-element">
        <label>Weight: </label>
        <input onChange={handleWeightChange} type="number" min="1" name="weight" required />lbs
      </div>
      <div className="form-element">
        <label>Position:</label>
        <select onChange={handlePositionChange} name="position" required>
          <option value="none">Choose a position</option>
          <optgroup label="Offense">
            <option value="QB">Quarterback</option>
            <option value="WR">Wide Receiver</option>
            <option value="RB">Runningback</option>
          </optgroup>
          <optgroup label="Defense">
            <option value="LB">Linebacker</option>
          </optgroup>
        </select>
      </div>
      <div className="form-element">
        {ratingsModel}
      </div>
      <button type="submit">Create player</button>
    </form>
    </div>
  )
}

export default PlayerForm