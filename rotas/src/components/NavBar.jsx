import './NavBar.css'

// 2 - Links com react router
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        {/* <Link to="/product/:id">Produtos</Link> */}
    </nav>
  )
}

export default NavBar