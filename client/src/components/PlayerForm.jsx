import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PlayerForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)
  const [image, setImage] = useState('')
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')
  const [weight, setWeight] = useState('')
  const [shortened, setShortened] = useState('')
  const [ratings, setRatings] = useState ({})

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

  const handleShortenedChange = (e) => {
    e.preventDefault()
    set(e.target.value)
  }

  return(
    <form onSubmit={handleOnSubmit}>
      <label>
        Name:
        <input onChange={handleNameChange} type="text" name="name" />
      </label>
      <label>
        Number:
        <input onChange={handleNumberChange} type="number" name="number" />
      </label>
      <label>
        Image:
        <input onChange={handleImageChange} type="text" name="image" />
      </label>
      <label>
        Height:
        <input onChange={handleHeightFeetChange} type="text" name="heightFeet" /> '
        <input onChange={handleHeightInchesChange} type="text" name="heightIches" /> "
      </label>
      <label>
        Weight:
        <input onChange={handleWeightChange} type="text" name="weight" /> lbs
      </label>
      <label>Position:</label>
      <select onChange={handleShortenedChange} name="shortened">
        <optgroup label="Offense">
          <option value="WR">WR</option>
          <option value="QB">QB</option>
          <option value="RB">RB</option>
        </optgroup>
        <optgroup label="Defense">
          <option value="LB">LB</option>
        </optgroup>
      </select>
      <label>Ratings:</label>
    </form>
  )
}