import './App.css'
import Teams from './pages/Teams'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
