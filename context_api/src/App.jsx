import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

// Componentes
import NavBar from './components/NavBar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>} />
              <Route path='/contatos' element={<Contact/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App