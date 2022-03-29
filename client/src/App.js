import './App.css'
import Teams from './pages/Teams'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Players from './pages/Players'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route path="/players/:teamId" element={<Players />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
