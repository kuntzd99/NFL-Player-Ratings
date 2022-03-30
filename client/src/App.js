import './App.css'
import Teams from './pages/Teams'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Players from './pages/Players'
import PlayerDetails from './pages/PlayerDetails'
import TeamForm from './components/TeamForm'
import PlayerForm from './components/PlayerForm'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route path="/players/:teamId" element={<Players />} />
          <Route path="details/:playerId" element={<PlayerDetails />} />
          <Route path="/teams/create" element={<TeamForm />} />
          <Route path="/players/create/:teamId" element={<PlayerForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
