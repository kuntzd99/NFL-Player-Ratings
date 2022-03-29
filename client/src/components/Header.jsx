import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/teams/create">Create Team</Link>
      </nav>
    </header>
  )
}

export default Header