import './App.css'
import Teams from './pages/Teams'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Players from './pages/Players'
import PlayerDetails from './pages/PlayerDetails'
import { useState } from 'react'

function App() {
  const [ratings, setRatings] = useState({})

  const handleChange = (e) => {
    let newRatings = ratings
    newRatings[e.target.name.toString()] = parseInt(e.target.value)
    setRatings(newRatings)
    console.log(ratings)
  }

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route path="/players/:teamId" element={<Players />} />
          <Route
            path="details/:playerId"
            element={
              <PlayerDetails
                handleChange={handleChange}
                ratings={ratings}
                setRatings={setRatings}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
