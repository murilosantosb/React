import './NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='Nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </div>
  )
}

export default NavBar