import './App.css'
import Teams from './pages/Teams'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Players from './pages/Players'
import PlayerDetails from './pages/PlayerDetails'
import TeamForm from './components/TeamForm'
import PlayerForm from './components/PlayerForm'

function App() {
  const getOverall = (players) => {
    if (players.length === 0) {
      return 0
    }
    let total = 0
    for (let i = 0; i < players.length; i++) {
      let average = 0
      for (let j = 0; j < Object.values(players[i].ratings).length; j++) {
        average += parseInt(Object.values(players[i].ratings)[j])
      }
      total += average / 5
    }
    return total / players.length
  }

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route
            path="/players/:teamId"
            getOverall={getOverall}
            element={<Players />}
          />
          <Route path="details/:playerId" element={<PlayerDetails />} />
          <Route
            path="/teams/create"
            getOverall={getOverall}
            element={<TeamForm />}
          />
          <Route path="/players/create/:teamId" element={<PlayerForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
