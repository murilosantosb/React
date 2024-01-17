import './NavBar.css'

// 2 - Links com react router
import { Link , NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      {/* Em Nav onde tem os links de navegação usamos o NavLink e não o Link */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
       <NavLink to="/"
        // className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
        >Home</NavLink>
       <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default NavBar