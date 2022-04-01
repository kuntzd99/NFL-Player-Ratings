import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const TeamForm = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState('')
  const [colorOne, setColorOne] = useState('')
  const [colorTwo, setColorTwo] = useState('')

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleLocationChange = (e) => {
    e.preventDefault()
    setLocation(e.target.value)
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    setImage(e.target.value)
  }

  const handleColorOneChange = (e) => {
    e.preventDefault()
    setColorOne(e.target.value)
  }

  const handleColorTwoChange = (e) => {
    e.preventDefault()
    setColorTwo(e.target.value)
  }

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    const packagedPayLoad = {
      name: name,
      location: location,
      image: image,
      teamColors: [colorOne, colorTwo]
    }
    if (image === '') {
      packagedPayLoad.image = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png'
    }
    e.preventDefault()
    axios.post(`http://localhost:3001/api/teams`, packagedPayLoad).catch((err) => console.log(err))
    navigate('/teams')
  }

  return(
    <div>
      <h3>Create a Team</h3>
    <form onSubmit={handleSubmit} className="player-form">
      <div className="form-element">
        <label>Team name: </label>
        <input onChange={handleNameChange} type="text" name="name" required />
      </div>
      <div className="form-element">
        <label>Location: </label>
        <input onChange={handleLocationChange} type="text" name="location" required />
      </div>
      <div className="form-element">
        <label>Image: </label>
        <input onChange={handleImageChange} type="text" name="image" />
      </div>
      <div className="form-element">
        <label>Primary color: </label>
        <input type="color" onChange={handleColorOneChange} name="colorOne" required />
      </div>
      <div>
        <label>Secondary color: </label>
        <input type="color" onChange={handleColorTwoChange} name="colorTwo" required />
      </div>
      <div className="button-container">
        <button type="Submit">Create team</button>
      </div>
    </form>
    </div>
  )
}

export default TeamForm