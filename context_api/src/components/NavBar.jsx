import './NavBar.css'

import  { NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contatos">Contatos</NavLink>
    </nav>
  )
}

export default NavBar