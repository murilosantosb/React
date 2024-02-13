import './NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='Nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to='/testes'>Hooks</NavLink>
        <NavLink to='/testes2'>Hooks 2</NavLink>
        <NavLink to='/videos'>Videos</NavLink>
        <NavLink to='/testes3'>Hooks 3</NavLink>
        <NavLink to='/memo'>Memo</NavLink>
    </div>
  )
}

export default NavBar